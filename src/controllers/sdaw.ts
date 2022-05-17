import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwewewMain, QwewewOutput, QwewewInput } from 'src/models/sdaw';

const logger = createLogger('controllers/sdaw');

export async function qwewew(inputs: JSONObject): Promise<QwewewOutput> {
    logger.debug('Calling qwewew with args: ', inputs);
    const params: QwewewInput = {};
    return transport.execute(QwewewMain, params) as Promise<QwewewOutput>;
}
