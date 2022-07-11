import { Router } from 'express';
import mountASDAS from './asdas';

export default function mountASDF(router: Router) {
    const asdas = Router();
    mountASDAS(asdas);
    router.use('/asdas', asdas);
}
