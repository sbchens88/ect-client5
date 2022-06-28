import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwedMain, QwedOutput, QwedInput } from 'src/models/asdwwo';

const logger = createLogger('controllers/asdwwo');

export async function qwed(inputs: JSONObject): Promise<QwedOutput> {
    logger.debug('Calling qwed with args: ', inputs);
    const params: QwedInput = {};
    return transport.execute(QwedMain, params) as Promise<QwedOutput>;
}
