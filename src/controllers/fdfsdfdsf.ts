import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { EwrrfdsfMain, EwrrfdsfOutput, EwrrfdsfInput } from 'src/models/fdfsdfdsf';

const logger = createLogger('controllers/fdfsdfdsf');

export async function ewrrfdsf(inputs: JSONObject): Promise<EwrrfdsfOutput> {
    logger.debug('Calling ewrrfdsf with args: ', inputs);
    const params: EwrrfdsfInput = {};
    return transport.execute(EwrrfdsfMain, params) as Promise<EwrrfdsfOutput>;
}
