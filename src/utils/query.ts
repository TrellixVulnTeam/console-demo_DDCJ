import { ACM_THANOS_PROXY_ENDPOINT, ACM_THANOS_QUERY_ENDPOINT, ACM_THANOS_QUERY_RANGE_ENDPOINT } from './constants';

export const getAcmThanosEnpoint = () => (
    `${ACM_THANOS_PROXY_ENDPOINT}${ACM_THANOS_QUERY_ENDPOINT}`
);

export const getAcmThanosEnpointQueryRange = () => (
    `${ACM_THANOS_PROXY_ENDPOINT}${ACM_THANOS_QUERY_RANGE_ENDPOINT}`
);