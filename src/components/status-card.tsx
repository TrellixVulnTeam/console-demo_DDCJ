import * as React from 'react';
import {
  PrometheusResponse
} from '@openshift-console/dynamic-plugin-sdk';

import { useURLPoll } from '../utils/use-url-poll';
import * as _ from 'lodash';


export const StatusCard: React.FC = () => {
 const healthStateMap = (state: string) => {
  switch (state) {
    case '0':
      return "OK";
    case '1':
      return "WARNING";
    case '2':
      return "ERROR";
    default:
      return "LOADING";
  }
};

  const [healthData, healthError, healthLoading] = useURLPoll<PrometheusResponse>('/api/proxy/namespace/openshift-monitoring/service/thanos-querier:9091/api/v1/query?query=node_network_up');

  const parsedHealthData =
  !healthError && !healthLoading
    ? healthData.data.result.reduce((acc, curr) => {
        const systemName = curr.metric.storage_system;
        const systemData = {
          systemName,
          rawHealthData: curr.value[1],
          healthState: healthStateMap(curr.value[1]),
        };
        return [...acc, systemData];
      }, [])
    : [];

const healthySystems = parsedHealthData.filter(
  (item) => item.rawHealthData === '0'
);

  return (
    <pre>{JSON.stringify(healthySystems, null, 2)}</pre>
  );
};
