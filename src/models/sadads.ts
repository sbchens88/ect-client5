import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const WdsaMain = new eradaniConnect.run.Sql(` sele`);
export interface WdsaInput {}
export type WdsaOutputRecord = JSONObject;
export interface WdsaOutput extends Array<WdsaOutputRecord> {}
