import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwrfdfMain = new eradaniConnect.run.Sql(`select * from qgpl.applications`);
export interface QwrfdfInput {}
export type QwrfdfOutputRecord = JSONObject;
export interface QwrfdfOutput extends Array<QwrfdfOutputRecord> {}
