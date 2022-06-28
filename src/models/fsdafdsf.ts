import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const DsadqMain = new eradaniConnect.run.Sql(` asdasd`);
export interface DsadqInput {}
export type DsadqOutputRecord = JSONObject;
export interface DsadqOutput extends Array<DsadqOutputRecord> {}
