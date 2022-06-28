import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwedddMain, QwedddOutput, QwedddInput } from 'src/models/qwe';

const logger = createLogger('controllers/qwe');

export async function qweddd(inputs: JSONObject): Promise<QwedddOutput> {
    logger.debug('Calling qweddd with args: ', inputs);
    const params: QwedddInput = {};
    return transport.execute(QwedddMain, params) as Promise<QwedddOutput>;
}
