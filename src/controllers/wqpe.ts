import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwerfMain, QwerfOutput, QwerfInput } from 'src/models/wqpe';

const logger = createLogger('controllers/wqpe');

export async function qwerf(inputs: JSONObject): Promise<QwerfOutput> {
    logger.debug('Calling qwerf with args: ', inputs);
    const params: QwerfInput = {};
    return transport.execute(QwerfMain, params) as Promise<QwerfOutput>;
}
