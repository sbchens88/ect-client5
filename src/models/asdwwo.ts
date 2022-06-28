import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwedMain = new eradaniConnect.run.Sql(` select * from `);
export interface QwedInput {}
export type QwedOutputRecord = JSONObject;
export interface QwedOutput extends Array<QwedOutputRecord> {}
