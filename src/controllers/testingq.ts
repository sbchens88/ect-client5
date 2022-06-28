import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwerrrgjjgmooMain, QwerrrgjjgmooOutput, QwerrrgjjgmooInput } from 'src/models/testingq';

const logger = createLogger('controllers/testingq');

export async function qwerrrgjjgmoo(inputs: JSONObject): Promise<QwerrrgjjgmooOutput> {
    logger.debug('Calling qwerrrgjjgmoo with args: ', inputs);
    const params: QwerrrgjjgmooInput = {};
    return transport.execute(QwerrrgjjgmooMain, params) as Promise<QwerrrgjjgmooOutput>;
}
