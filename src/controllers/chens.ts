import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { SdojmMain, SdojmOutput, SdojmInput } from 'src/models/chens';

const logger = createLogger('controllers/chens');

export async function sdojm(inputs: JSONObject): Promise<SdojmOutput> {
    logger.debug('Calling sdojm with args: ', inputs);
    const params: SdojmInput = {};
    return transport.execute(SdojmMain, params) as Promise<SdojmOutput>;
}
