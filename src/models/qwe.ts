import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwedddMain = new eradaniConnect.run.Sql(` select * from qwe`);
export interface QwedddInput {}
export type QwedddOutputRecord = JSONObject;
export interface QwedddOutput extends Array<QwedddOutputRecord> {}
