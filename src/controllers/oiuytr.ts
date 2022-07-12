import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { BghgjbnvMain, BghgjbnvOutput, BghgjbnvInput } from 'src/models/oiuytr';

const logger = createLogger('controllers/oiuytr');

export async function bghgjbnv(inputs: JSONObject): Promise<BghgjbnvOutput> {
    logger.debug('Calling bghgjbnv with args: ', inputs);
    const params: BghgjbnvInput = {};
    return transport.execute(BghgjbnvMain, params) as Promise<BghgjbnvOutput>;
}
