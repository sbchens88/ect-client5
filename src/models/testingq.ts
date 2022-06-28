import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwerrrgjjgmooMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface QwerrrgjjgmooInput {}
export type QwerrrgjjgmooOutputRecord = JSONObject;
export interface QwerrrgjjgmooOutput extends Array<QwerrrgjjgmooOutputRecord> {}
