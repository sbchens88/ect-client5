import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const SdojmMain = new eradaniConnect.run.Sql(` sdf`);
export interface SdojmInput {}
export type SdojmOutputRecord = JSONObject;
export interface SdojmOutput extends Array<SdojmOutputRecord> {}
