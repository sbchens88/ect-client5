import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { EwqrqpMain, EwqrqpOutput, EwqrqpInput } from 'src/models/asdp';

const logger = createLogger('controllers/asdp');

export async function ewqrqp(inputs: JSONObject): Promise<EwqrqpOutput> {
    logger.debug('Calling ewqrqp with args: ', inputs);
    const params: EwqrqpInput = {};
    return transport.execute(EwqrqpMain, params) as Promise<EwqrqpOutput>;
}
