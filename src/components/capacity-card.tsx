import * as React from 'react';
import {
  PrometheusResponse,
  PrometheusResult,
} from '@openshift-console/dynamic-plugin-sdk';
import { useURLPoll } from './common/use-url-poll-hook';
import {
  DashboardCard,
  DashboardCardBody,
  DashboardCardHeader,
  DashboardCardTitle,
} from '@openshift-console/dynamic-plugin-sdk-internal';
import * as _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { humanizeBinaryBytes } from '../humanize';
import { getAcmThanosEnpoint } from '../utils/query';
import { CapacityCard, CapacityMetricDatum } from './common/capacity-card';


const getMetricForSystem = (
    metric: PrometheusResponse,
    system: PrometheusResult
) =>
    metric?.data?.result?.find(
      (value) => (value.metric.managedBy === system.metric.target_name) && (value.metric.cluster === system.metric.cluster)
    );
    
  
export const SystemCapacityCard: React.FC = () => {
    const { t } = useTranslation('plugin__odf-console');
    const [systems, errorSystem, loadingsystem] = useURLPoll<PrometheusResponse>(`${getAcmThanosEnpoint()}?query=odf_system_map`);
    const [usedCapacity, errorUsedCapacity, loadingUsedCapacity] = useURLPoll<PrometheusResponse>(`${getAcmThanosEnpoint()}?query=odf_system_raw_capacity_used_bytes`);
    const [totalCapacity, errorTotalCapacity, loadingTotalCapacity] = useURLPoll<PrometheusResponse>(`${getAcmThanosEnpoint()}?query=odf_system_raw_capacity_total_bytes`);
  
    const data =
      !loadingsystem && !loadingUsedCapacity && !loadingTotalCapacity
        ? systems?.data?.result?.map<CapacityMetricDatum>((system) => {
            const usedMetric = getMetricForSystem(usedCapacity, system);
            const totalMetric = getMetricForSystem(totalCapacity, system);
            const datum = {
              name: system.metric.storage_system,
              cluster: system.metric.cluster,
              managedSystemName: system.metric.target_name,
              managedSystemKind: system.metric.target_kind,
              usedValue: humanizeBinaryBytes(usedMetric?.value?.[1]),
              totalValue: humanizeBinaryBytes(totalMetric?.value?.[1]),
            };
            return datum;
          })
        : [];
    const error =
      !_.isEmpty(errorSystem) ||
      !_.isEmpty(errorTotalCapacity) ||
      !_.isEmpty(errorUsedCapacity);
    const isLoading =
      loadingUsedCapacity && loadingTotalCapacity && !errorSystem;
    return (
      <DashboardCard className="odf-capacityCard--height">
        <DashboardCardHeader>
          <DashboardCardTitle>{t('System Capacity')}</DashboardCardTitle>
        </DashboardCardHeader>
        <DashboardCardBody>
          {!error ? (
            <CapacityCard data={data} isPercentage loading={isLoading} />
          ) : (
            <>{t('No data available')}</>
          )}
        </DashboardCardBody>
      </DashboardCard>
    );
  };
