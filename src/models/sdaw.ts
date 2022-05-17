import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwewewMain = new eradaniConnect.run.Sql(`select * from qgpl.applications`);
export interface QwewewInput {}
export type QwewewOutputRecord = JSONObject;
export interface QwewewOutput extends Array<QwewewOutputRecord> {}
