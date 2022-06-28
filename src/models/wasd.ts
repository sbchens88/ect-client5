import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const SdfssMain = new eradaniConnect.run.Sql(` select * from asdas`);
export interface SdfssInput {}
export type SdfssOutputRecord = JSONObject;
export interface SdfssOutput extends Array<SdfssOutputRecord> {}
