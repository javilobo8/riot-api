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
  region(region: string): RegionHost {
    if (!REGION_HOST[region as Region]) {
      throw new Error(`Invalid region "${region}"`);
    }
    return REGION_HOST[region as Region];
  }

  cluster(cluster: string): ClusterHost {
    if (!CLUSTER_HOST[cluster as Cluster]) {
      throw new Error(`Invalid cluster "${cluster}"`);
    }
    return CLUSTER_HOST[cluster as Cluster];
  }

  regionToCluster(region: string): ClusterHost {
    if (!REGION_TO_CLUSTER[region as Region]) {
      throw new Error(`Invalid region "${region}"`);
    }
    return REGION_TO_CLUSTER[region as Region];
  }
}
