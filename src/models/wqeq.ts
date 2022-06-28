import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QweMain = new eradaniConnect.run.Sql(` selelct *dsfdf`);
export interface QweInput {}
export type QweOutputRecord = JSONObject;
export interface QweOutput extends Array<QweOutputRecord> {}
