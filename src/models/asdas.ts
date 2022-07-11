import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const WsdcvfMain = new eradaniConnect.run.Sql(`asdsad`);
export interface WsdcvfInput {}
export type WsdcvfOutputRecord = JSONObject;
export interface WsdcvfOutput extends Array<WsdcvfOutputRecord> {}
