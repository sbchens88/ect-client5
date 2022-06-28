import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { DsafdMain, DsafdOutput, DsafdInput } from 'src/models/qwe';

const logger = createLogger('controllers/qwe');

export async function dsafd(inputs: JSONObject): Promise<DsafdOutput> {
    logger.debug('Calling dsafd with args: ', inputs);
    const params: DsafdInput = {};
    return transport.execute(DsafdMain, params) as Promise<DsafdOutput>;
}
