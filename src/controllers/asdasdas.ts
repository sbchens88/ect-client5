import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwedcMain, QwedcOutput, QwedcInput } from 'src/models/asdasdas';

const logger = createLogger('controllers/asdasdas');

export async function qwedc(inputs: JSONObject): Promise<QwedcOutput> {
    logger.debug('Calling qwedc with args: ', inputs);
    const params: QwedcInput = {};
    return transport.execute(QwedcMain, params) as Promise<QwedcOutput>;
}
