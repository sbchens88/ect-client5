import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const AsdasdqMain = new eradaniConnect.run.Sql(` asdasd`);
export interface AsdasdqInput {}
export type AsdasdqOutputRecord = JSONObject;
export interface AsdasdqOutput extends Array<AsdasdqOutputRecord> {}
