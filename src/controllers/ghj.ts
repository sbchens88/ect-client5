import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { DfghjkMain, DfghjkOutput, DfghjkInput } from 'src/models/ghj';

const logger = createLogger('controllers/ghj');

export async function dfghjk(inputs: JSONObject): Promise<DfghjkOutput> {
    logger.debug('Calling dfghjk with args: ', inputs);
    const params: DfghjkInput = {};
    return transport.execute(DfghjkMain, params) as Promise<DfghjkOutput>;
}
