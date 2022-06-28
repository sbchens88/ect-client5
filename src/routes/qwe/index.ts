import { Router } from 'express';
import mountWQPE from './wqpe';

export default function mountQWE(router: Router) {
    const wqpe = Router();
    mountWQPE(wqpe);
    router.use('/wqpe', wqpe);
}
