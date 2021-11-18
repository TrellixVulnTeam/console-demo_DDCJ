import * as _ from "lodash";
import { ONE_HOUR } from './constants'

import { PrometheusResponse, PrometheusResult } from "@openshift-console/dynamic-plugin-sdk";

import { humanizeBinaryBytes, humanizeIOPS, humanizeLatency } from "../humanize";
import { LineGraphProps } from "../components/common/line-graph";


type DataFrame = {
    systemName: string;
    managedSystemKind: string;
    managedSystemName: string;
    currentLocation: string;
    iopsData: LineGraphProps;
    throughputData: LineGraphProps;
    latencyData: LineGraphProps;
    className?: string;
};
const getDatForSystem = (
    promData: PrometheusResponse,
    system: PrometheusResult,
    humanizer: Function
) => {
    const systemName = system.metric.target_name;
    const relatedMetrics = promData?.data?.result?.find(
        (value) => (value.metric.managedBy === systemName) && (value.metric.cluster === system.metric.cluster)
    );
    const metrics = relatedMetrics?.values?.map((value) => ({
        timestamp: new Date(value[0] * 1000),
        y: humanizer(value[1]),
    }))
    return (
        metrics || []
    );
};

export const generateDataFrames = (
    systems: PrometheusResponse,
    ld: PrometheusResponse,
    td: PrometheusResponse,
    id: PrometheusResponse
): DataFrame[] => {
    if (_.isEmpty(systems) || !ld || !td || !id) {
        return [] as DataFrame[];
    }
    return systems.data?.result.reduce<DataFrame[]>((acc, curr) => {
        const frame: DataFrame = {
            managedSystemKind: curr.metric.target_kind,
            managedSystemName: curr.metric.target_name,
            systemName: `${curr.metric.cluster}: ${curr.metric.storage_system}`,
            currentLocation: '/',
            iopsData: {
                data: getDatForSystem(id, curr, humanizeIOPS),
            },
            throughputData: {
                data: getDatForSystem(td, curr, humanizeBinaryBytes),
            },
            latencyData: {
                data: getDatForSystem(ld, curr, humanizeLatency),
            },
        };
        acc.push(frame);
        return acc;
    }, []);
};


// Range vector queries require end, start, and step search params
export const getRangeVectorSearchParams = (
    endTime: number = Date.now(),
    samples: number = 60,
    timespan: number = ONE_HOUR,
  ): URLSearchParams => {
    const params = new URLSearchParams();
    params.append('start', `${(endTime - timespan) / 1000}`);
    params.append('end', `${endTime / 1000}`);
    params.append('step', `${timespan / samples / 1000}`);
    return params;
  };