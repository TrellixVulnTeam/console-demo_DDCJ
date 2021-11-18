import * as React from 'react';
import * as _ from 'lodash';


import { useTranslation } from 'react-i18next';

import { Gallery, GalleryItem, pluralize } from '@patternfly/react-core';

import {
    DashboardCard,
    DashboardCardBody,
    DashboardCardHeader,
    DashboardCardTitle,
    HealthBody,
    HealthItem,
} from '@openshift-console/dynamic-plugin-sdk-internal';

import {
  PrometheusResponse,
} from '@openshift-console/dynamic-plugin-sdk';

import { HealthState } from '../utils/constants';
import { getAcmThanosEnpoint } from '../utils/query';
import { useURLPoll } from './common/use-url-poll-hook';


export const StatusCard: React.FC = () => {
  const { t } = useTranslation('plugin__console-demo');
   const healthStateMap = (state: string) => {
    switch (state) {
      case '0':
        return HealthState.OK;
      case '1':
        return HealthState.WARNING;
      case '2':
        return HealthState.ERROR;
      default:
        return HealthState.LOADING;
    }
  };

  const [healthData, healthError, healthLoading] = useURLPoll<PrometheusResponse>(`${getAcmThanosEnpoint()}?query=odf_system_health_status{managedBy!=""}`);
  
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

const unHealthySystems = parsedHealthData.filter(
    (item) => item.rawHealthData !== '0'
);


  return (
   <DashboardCard className="odfDashboard-card--height">
      <DashboardCardHeader>
        <DashboardCardTitle>{t('Status')}</DashboardCardTitle>
      </DashboardCardHeader>
      <DashboardCardBody>
        <HealthBody>
          <Gallery className="co-overview-status__health" hasGutter>
            <GalleryItem>
                <HealthItem
                  title={pluralize(healthySystems.length, 'Storage System')}
                  state={HealthState.OK}
                >
                </HealthItem>
              </GalleryItem>
              <GalleryItem>
                <HealthItem
                  title={pluralize(unHealthySystems.length, 'Storage System')}
                  state={HealthState.ERROR}
                >
                </HealthItem>
              </GalleryItem>
          </Gallery>
        </HealthBody>
      </DashboardCardBody>
    </DashboardCard>
  );
};
