import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { DsadqMain, DsadqOutput, DsadqInput } from 'src/models/fsdafdsf';

const logger = createLogger('controllers/fsdafdsf');

export async function dsadq(inputs: JSONObject): Promise<DsadqOutput> {
    logger.debug('Calling dsadq with args: ', inputs);
    const params: DsadqInput = {};
    return transport.execute(DsadqMain, params) as Promise<DsadqOutput>;
}
