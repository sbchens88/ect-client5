import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { WdsaMain, WdsaOutput, WdsaInput } from 'src/models/sadads';

const logger = createLogger('controllers/sadads');

export async function wdsa(inputs: JSONObject): Promise<WdsaOutput> {
    logger.debug('Calling wdsa with args: ', inputs);
    const params: WdsaInput = {};
    return transport.execute(WdsaMain, params) as Promise<WdsaOutput>;
}
