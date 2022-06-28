import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const DsafdMain = new eradaniConnect.run.Sql(` asdfasd`);
export interface DsafdInput {}
export type DsafdOutputRecord = JSONObject;
export interface DsafdOutput extends Array<DsafdOutputRecord> {}
