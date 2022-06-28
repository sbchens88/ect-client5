import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QweqwMain = new eradaniConnect.run.Sql(` select * qwewe`);
export interface QweqwInput {}
export type QweqwOutputRecord = JSONObject;
export interface QweqwOutput extends Array<QweqwOutputRecord> {}
