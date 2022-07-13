import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwewedMain = new eradaniConnect.run.Sql(` asdf`);
export interface QwewedInput {}
export type QwewedOutputRecord = JSONObject;
export interface QwewedOutput extends Array<QwewedOutputRecord> {}
