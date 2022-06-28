import { Router } from 'express';
import mountQWEQQ from './qweqq';

export default function mountQWE(router: Router) {
    const qweqq = Router();
    mountQWEQQ(qweqq);
    router.use('/qweqq', qweqq);
}
