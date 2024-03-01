import {
  Region,
  Cluster,
  RegionHost,
  ClusterHost,
  CLUSTER_HOST,
  REGION_HOST,
  REGION_TO_CLUSTER,
} from './constants';

export class EndpointParser {
  region(region: Region): RegionHost {
    if (!REGION_HOST[region]) {
      throw new Error(`Invalid region "${region}"`);
    }
    return REGION_HOST[region];
  }

  cluster(cluster: Cluster): ClusterHost {
    if (!CLUSTER_HOST[cluster]) {
      throw new Error(`Invalid cluster "${cluster}"`);
    }
    return CLUSTER_HOST[cluster];
  }

  regionToCluster(region: Region): ClusterHost {
    if (!REGION_TO_CLUSTER[region]) {
      throw new Error(`Invalid region "${region}"`);
    }
    return REGION_TO_CLUSTER[region];
  }
}
