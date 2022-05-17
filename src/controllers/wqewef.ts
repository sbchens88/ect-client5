import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwrfdfMain, QwrfdfOutput, QwrfdfInput } from 'src/models/wqewef';

const logger = createLogger('controllers/wqewef');

export async function qwrfdf(inputs: JSONObject): Promise<QwrfdfOutput> {
    logger.debug('Calling qwrfdf with args: ', inputs);
    const params: QwrfdfInput = {};
    return transport.execute(QwrfdfMain, params) as Promise<QwrfdfOutput>;
}
