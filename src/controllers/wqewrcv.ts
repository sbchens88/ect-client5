import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QdfsvdgMain, QdfsvdgOutput, QdfsvdgInput } from 'src/models/wqewrcv';

const logger = createLogger('controllers/wqewrcv');

export async function qdfsvdg(inputs: JSONObject): Promise<QdfsvdgOutput> {
    logger.debug('Calling qdfsvdg with args: ', inputs);
    const params: QdfsvdgInput = {};
    return transport.execute(QdfsvdgMain, params) as Promise<QdfsvdgOutput>;
}
