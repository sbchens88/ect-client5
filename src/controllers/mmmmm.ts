import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwewedMain, QwewedOutput, QwewedInput } from 'src/models/mmmmm';

const logger = createLogger('controllers/mmmmm');

export async function qwewed(inputs: JSONObject): Promise<QwewedOutput> {
    logger.debug('Calling qwewed with args: ', inputs);
    const params: QwewedInput = {};
    return transport.execute(QwewedMain, params) as Promise<QwewedOutput>;
}
