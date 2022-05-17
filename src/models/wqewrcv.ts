import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QdfsvdgMain = new eradaniConnect.run.Sql(`select * from qgpl.applications`);
export interface QdfsvdgInput {}
export type QdfsvdgOutputRecord = JSONObject;
export interface QdfsvdgOutput extends Array<QdfsvdgOutputRecord> {}
