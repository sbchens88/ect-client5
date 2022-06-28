import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const AsdeMain = new eradaniConnect.run.Sql(` sadfsdasd`);
export interface AsdeInput {}
export type AsdeOutputRecord = JSONObject;
export interface AsdeOutput extends Array<AsdeOutputRecord> {}
