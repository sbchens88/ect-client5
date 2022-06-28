import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { DsadqMain, DsadqOutput, DsadqInput, DsadqasdMain, DsadqasdOutput, DsadqasdInput } from 'src/models/fsdafdsf';

const logger = createLogger('controllers/fsdafdsf');

export async function dsadq(inputs: JSONObject): Promise<DsadqOutput> {
    logger.debug('Calling dsadq with args: ', inputs);
    const params: DsadqInput = {};
    return transport.execute(DsadqMain, params) as Promise<DsadqOutput>;
}

export async function dsadqasd(inputs: JSONObject): Promise<DsadqasdOutput> {
    logger.debug('Calling dsadqasd with args: ', inputs);
    const params: DsadqasdInput = {};
    return transport.execute(DsadqasdMain, params) as Promise<DsadqasdOutput>;
}
