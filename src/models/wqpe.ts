import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwerfMain = new eradaniConnect.run.Sql(` select *`);
export interface QwerfInput {}
export type QwerfOutputRecord = JSONObject;
export interface QwerfOutput extends Array<QwerfOutputRecord> {}
