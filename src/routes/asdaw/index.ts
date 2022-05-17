import { Router } from 'express';
import mountQWEPEPE from './qwepepe';

export default function mountASDAW(router: Router) {
    const qwepepe = Router();
    mountQWEPEPE(qwepepe);
    router.use('/qwepepe', qwepepe);
}
