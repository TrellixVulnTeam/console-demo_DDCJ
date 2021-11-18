import * as React from 'react';
import * as _ from 'lodash';
import { useTranslation } from 'react-i18next';

import {
    PrometheusResponse
  } from '@openshift-console/dynamic-plugin-sdk';
import {
  DashboardCard,
  DashboardCardHeader,
  DashboardCardTitle,
  UtilizationDurationDropdown,
} from '@openshift-console/dynamic-plugin-sdk-internal';

import { SortByDirection } from '@patternfly/react-table';

import { useURLPoll } from './common/use-url-poll-hook';
import { DataUnavailableError } from '../utils/types';
import LineGraph, { LineGraphProps } from './common/line-graph';
import Table, { Column } from './common/table';
import './performance-card.scss';
import { generateDataFrames, getRangeVectorSearchParams } from '../utils/query-utils';
import { getAcmThanosEnpointQueryRange, getAcmThanosEnpoint } from '../utils/query';

type RowProps = {
  systemName: string;
  managedSystemKind: string;
  managedSystemName: string;
  currentLocation: string;
  iopsData: LineGraphProps;
  throughputData: LineGraphProps;
  latencyData: LineGraphProps;
  className?: string;
};

type GetRow = (
  args: RowProps
) => [React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode];

const getRow: GetRow = ({
  systemName,
  iopsData,
  throughputData,
  latencyData,
}) => {
  return [
    <>{systemName}</>,
    <LineGraph key={`${systemName}_IOPS`} {...iopsData} />,

    <LineGraph key={`${systemName}_LAT`} {...latencyData} />,

    <LineGraph key={`${systemName}_THR`} {...throughputData} />,
  ];
};


const nameSort = (a: RowProps, b: RowProps, c: SortByDirection) => {
  const negation = c !== SortByDirection.asc;
  const sortVal = a.systemName.localeCompare(b.systemName);
  return negation ? -sortVal : sortVal;
};

const metricsSort =
  (metric: 'iopsData' | 'throughputData' | 'latencyData') =>
  (a: RowProps, b: RowProps, c: SortByDirection) => {
    const negation = c !== SortByDirection.asc;
    const dataA = a[metric]?.data;
    const dataB = b[metric]?.data;
    const sortVal =
      dataA?.[dataA.length - 1]?.y?.value -
        dataB?.[dataB.length - 1]?.y?.value || 0;
    return negation ? -sortVal : sortVal;
  };

export const PerformanceCard: React.FC = () => {
  const { t } = useTranslation('plugin__odf-console');
  const headerColumns: Column[] = [
    {
      columnName: t('Name'),
      className: 'pf-u-w-10 performanceCard--verticalAlign',
      sortFunction: nameSort,
    },
    {
      columnName: t('IOPS'),
      className: 'pf-u-w-30',
      sortFunction: metricsSort('iopsData'),
    },
    {
      columnName: t('Latency'),
      className: 'pf-u-w-30',
      sortFunction: metricsSort('latencyData'),
    },
    {
      columnName: t('Throughput'),
      className: 'pf-u-w-30',
      sortFunction: metricsSort('throughputData'),
    },
  ];

  const [systems, errorSystem, loadingsystem] = useURLPoll<PrometheusResponse>(`${getAcmThanosEnpoint()}?query=odf_system_map`);
  const [latency, latencyError, latencyLoading] = useURLPoll<PrometheusResponse>(`${getAcmThanosEnpointQueryRange()}?query=odf_system_latency_seconds&${getRangeVectorSearchParams()}`);
  const [throughput, throughputError, throughputLoading] = useURLPoll<PrometheusResponse>(`${getAcmThanosEnpointQueryRange()}?query=odf_system_throughput_total_bytes&${getRangeVectorSearchParams()}`);
  const [iops, iopsError, iopsLoading] = useURLPoll<PrometheusResponse>(`${getAcmThanosEnpointQueryRange()}?query=odf_system_iops_total_bytes&${getRangeVectorSearchParams()}`);

  const rawRows = generateDataFrames(systems, latency, throughput, iops);
  const loading =
    loadingsystem || latencyLoading || throughputLoading || iopsLoading;
  const error =
    !!errorSystem || !!throughputError || !!latencyError || !!iopsError;

  return (
    <DashboardCard>
      <DashboardCardHeader>
        <DashboardCardTitle>{t('Performance')}</DashboardCardTitle>
        <UtilizationDurationDropdown />
      </DashboardCardHeader>
      {!error && !loading && (
        <Table
          columns={headerColumns}
          rawData={rawRows as []}
          rowRenderer={getRow as any}
          ariaLabel={t('Performance Card')}
        />
      )}
      {loading && !error && <PerformanceCardLoading />}
      {((error && !loading) || (!error && !loading && _.isEmpty(rawRows))) && (
        <div className="performanceCard--error">
          <DataUnavailableError />{' '}
        </div>
      )}
    </DashboardCard>
  );
};

export default PerformanceCard;

const PerformanceCardLoading: React.FC = () => (
  <div className="odf-performanceCardLoading-body">
    <div className="odf-performanceCardLoading-body__item">
      <div className="odf-performanceCardLoading-body-item__element odf-performanceCardLoading-body-item__element--header" />
      <div className="odf-performanceCardLoading-body-item__element odf-performanceCardLoading-body-item__element--header" />
      <div className="odf-performanceCardLoading-body-item__element odf-performanceCardLoading-body-item__element--header" />
      <div className="odf-performanceCardLoading-body-item__element odf-performanceCardLoading-body-item__element--header" />
    </div>
    <div className="odf-performanceCardLoading-body__item">
      <div className="odf-performanceCardLoading-body-item__element" />
      <div className="odf-performanceCardLoading-body-item__element" />
      <div className="odf-performanceCardLoading-body-item__element" />
      <div className="odf-performanceCardLoading-body-item__element" />
    </div>
    <div className="odf-performanceCardLoading-body__item">
      <div className="odf-performanceCardLoading-body-item__element" />
      <div className="odf-performanceCardLoading-body-item__element" />
      <div className="odf-performanceCardLoading-body-item__element" />
      <div className="odf-performanceCardLoading-body-item__element" />
    </div>
  </div>
);
