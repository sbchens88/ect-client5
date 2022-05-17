import { Router } from 'express';
import mountWQEWEF from './wqewef';

export default function mountASDSW(router: Router) {
    const wqewef = Router();
    mountWQEWEF(wqewef);
    router.use('/wqewef', wqewef);
}
