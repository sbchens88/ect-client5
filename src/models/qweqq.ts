import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwerrMain = new eradaniConnect.run.Sql(` selct`);
export interface QwerrInput {}
export type QwerrOutputRecord = JSONObject;
export interface QwerrOutput extends Array<QwerrOutputRecord> {}
