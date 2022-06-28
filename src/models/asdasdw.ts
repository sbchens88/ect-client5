import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwecMain = new eradaniConnect.run.Sql(` sad`);
export interface QwecInput {}
export type QwecOutputRecord = JSONObject;
export interface QwecOutput extends Array<QwecOutputRecord> {}
