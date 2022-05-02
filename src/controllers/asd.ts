import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QweMain, QweOutput, QweInput } from 'src/models/asd';

const logger = createLogger('controllers/asd');

export async function qwe(inputs: JSONObject): Promise<QweOutput> {
    logger.debug('Calling qwe with args: ', inputs);
    const params: QweInput = {};
    return transport.execute(QweMain, params) as Promise<QweOutput>;
}
