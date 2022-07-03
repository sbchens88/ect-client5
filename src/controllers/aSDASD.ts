import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { AsdasdqMain, AsdasdqOutput, AsdasdqInput } from 'src/models/a-sdasd';

const logger = createLogger('controllers/aSDASD');

export async function asdasdq(inputs: JSONObject): Promise<AsdasdqOutput> {
    logger.debug('Calling asdasdq with args: ', inputs);
    const params: AsdasdqInput = {};
    return transport.execute(AsdasdqMain, params) as Promise<AsdasdqOutput>;
}
