import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const DfMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface DfInput {}
export type DfOutputRecord = JSONObject;
export interface DfOutput extends Array<DfOutputRecord> {}
