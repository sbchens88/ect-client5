import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwedcMain = new eradaniConnect.run.Sql(`asdasd`);
export interface QwedcInput {}
export type QwedcOutputRecord = JSONObject;
export interface QwedcOutput extends Array<QwedcOutputRecord> {}
