import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { AsdeMain, AsdeOutput, AsdeInput } from 'src/models/dasdasdas';

const logger = createLogger('controllers/dasdasdas');

export async function asde(inputs: JSONObject): Promise<AsdeOutput> {
    logger.debug('Calling asde with args: ', inputs);
    const params: AsdeInput = {};
    return transport.execute(AsdeMain, params) as Promise<AsdeOutput>;
}
