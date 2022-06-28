import { Router } from 'express';
import mountFSDAFDSF from './fsdafdsf';

export default function mountASDAEDR(router: Router) {
    const fsdafdsf = Router();
    mountFSDAFDSF(fsdafdsf);
    router.use('/fsdafdsf', fsdafdsf);
}
