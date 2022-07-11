import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { WsdcvfMain, WsdcvfOutput, WsdcvfInput } from 'src/models/asdas';

const logger = createLogger('controllers/asdas');

export async function wsdcvf(inputs: JSONObject): Promise<WsdcvfOutput> {
    logger.debug('Calling wsdcvf with args: ', inputs);
    const params: WsdcvfInput = {};
    return transport.execute(WsdcvfMain, params) as Promise<WsdcvfOutput>;
}
