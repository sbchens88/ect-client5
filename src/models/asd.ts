import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QweMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface QweInput {}
export type QweOutputRecord = JSONObject;
export interface QweOutput extends Array<QweOutputRecord> {}

export const AsdMain = new eradaniConnect.run.Sql(` sdf`);
export interface AsdInput {}
export type AsdOutputRecord = JSONObject;
export interface AsdOutput extends Array<AsdOutputRecord> {}
