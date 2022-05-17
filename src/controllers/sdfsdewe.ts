import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwedfonMain, QwedfonOutput, QwedfonInput } from 'src/models/sdfsdewe';

const logger = createLogger('controllers/sdfsdewe');

export async function qwedfon(inputs: JSONObject): Promise<QwedfonOutput> {
    logger.debug('Calling qwedfon with args: ', inputs);
    const params: QwedfonInput = {};
    return transport.execute(QwedfonMain, params) as Promise<QwedfonOutput>;
}
