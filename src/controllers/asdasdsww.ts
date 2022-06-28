import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QweffMain, QweffOutput, QweffInput } from 'src/models/asdasdsww';

const logger = createLogger('controllers/asdasdsww');

export async function qweff(inputs: JSONObject): Promise<QweffOutput> {
    logger.debug('Calling qweff with args: ', inputs);
    const params: QweffInput = {};
    return transport.execute(QweffMain, params) as Promise<QweffOutput>;
}
