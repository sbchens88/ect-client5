import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwerrMain, QwerrOutput, QwerrInput } from 'src/models/qweqq';

const logger = createLogger('controllers/qweqq');

export async function qwerr(inputs: JSONObject): Promise<QwerrOutput> {
    logger.debug('Calling qwerr with args: ', inputs);
    const params: QwerrInput = {};
    return transport.execute(QwerrMain, params) as Promise<QwerrOutput>;
}
