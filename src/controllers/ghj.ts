import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { DfghjkMain, DfghjkOutput, DfghjkInput, DfghjkjjMain, DfghjkjjOutput, DfghjkjjInput } from 'src/models/ghj';

const logger = createLogger('controllers/ghj');

export async function dfghjk(inputs: JSONObject): Promise<DfghjkOutput> {
    logger.debug('Calling dfghjk with args: ', inputs);
    const params: DfghjkInput = {};
    return transport.execute(DfghjkMain, params) as Promise<DfghjkOutput>;
}

export async function dfghjkjj(inputs: JSONObject): Promise<DfghjkjjOutput> {
    logger.debug('Calling dfghjkjj with args: ', inputs);
    const params: DfghjkjjInput = {};
    return transport.execute(DfghjkjjMain, params) as Promise<DfghjkjjOutput>;
}
