import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwecMain, QwecOutput, QwecInput } from 'src/models/asdasdw';

const logger = createLogger('controllers/asdasdw');

export async function qwec(inputs: JSONObject): Promise<QwecOutput> {
    logger.debug('Calling qwec with args: ', inputs);
    const params: QwecInput = {};
    return transport.execute(QwecMain, params) as Promise<QwecOutput>;
}
