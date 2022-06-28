import { Router } from 'express';
import mountWQEQ from './wqeq';

export default function mountASDW(router: Router) {
    const wqeq = Router();
    mountWQEQ(wqeq);
    router.use('/wqeq', wqeq);
}
