import { expect, it, describe } from 'vitest';

import { EndpointParser } from '../src/EndpointParser';
import {
  CLUSTER,
  CLUSTER_HOST,
  REGION,
  REGION_HOST,
  REGION_TO_CLUSTER,
} from '../src';

describe('EndpointParser', () => {
  const endpointParser = new EndpointParser();

  describe('region', () => {
    it('should return the region host', () => {
      const result = endpointParser.region(REGION.EUW);
      expect(result).toEqual(REGION_HOST[REGION.EUW]);
    });

    it('should throw an error with invalid region', () => {
      const call = () => endpointParser.region('invalid-region');
      expect(call).toThrowError('Invalid region "invalid-region"');
    });
  });

  describe('cluster', () => {
    it('should return the cluster host', () => {
      const result = endpointParser.cluster(CLUSTER.EUROPE);
      expect(result).toEqual(CLUSTER_HOST[CLUSTER.EUROPE]);
    });

    it('should throw an error with invalid cluster', () => {
      const call = () => endpointParser.cluster('invalid-cluster');
      expect(call).toThrowError('Invalid cluster "invalid-cluster"');
    });
  });

  describe('regionToCluster', () => {
    it('should return the cluster host', () => {
      const result = endpointParser.regionToCluster(REGION.EUW);
      expect(result).toEqual(REGION_TO_CLUSTER[REGION.EUW]);
    });

    it('should throw an error with invalid region', () => {
      const call = () => endpointParser.regionToCluster('invalid-region');
      expect(call).toThrowError('Invalid region "invalid-region"');
    });
  });
});
