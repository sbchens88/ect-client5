import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { DfMain, DfOutput, DfInput } from 'src/models/sdfe';

const logger = createLogger('controllers/sdfe');

export async function df(inputs: JSONObject): Promise<DfOutput> {
    logger.debug('Calling df with args: ', inputs);
    const params: DfInput = {};
    return transport.execute(DfMain, params) as Promise<DfOutput>;
}
