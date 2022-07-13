import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const EwrrfdsfMain = new eradaniConnect.run.Sql(` sdf`);
export interface EwrrfdsfInput {}
export type EwrrfdsfOutputRecord = JSONObject;
export interface EwrrfdsfOutput extends Array<EwrrfdsfOutputRecord> {}
