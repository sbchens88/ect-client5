import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const EwqrqpMain = new eradaniConnect.run.Sql(` select *`);
export interface EwqrqpInput {}
export type EwqrqpOutputRecord = JSONObject;
export interface EwqrqpOutput extends Array<EwqrqpOutputRecord> {}
