import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwedfonMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface QwedfonInput {}
export type QwedfonOutputRecord = JSONObject;
export interface QwedfonOutput extends Array<QwedfonOutputRecord> {}
