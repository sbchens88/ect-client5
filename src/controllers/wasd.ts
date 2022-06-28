import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { SdfssMain, SdfssOutput, SdfssInput } from 'src/models/wasd';

const logger = createLogger('controllers/wasd');

export async function sdfss(inputs: JSONObject): Promise<SdfssOutput> {
    logger.debug('Calling sdfss with args: ', inputs);
    const params: SdfssInput = {};
    return transport.execute(SdfssMain, params) as Promise<SdfssOutput>;
}
