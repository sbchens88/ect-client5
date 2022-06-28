import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QweffMain = new eradaniConnect.run.Sql(` select * asdfa`);
export interface QweffInput {}
export type QweffOutputRecord = JSONObject;
export interface QweffOutput extends Array<QweffOutputRecord> {}
