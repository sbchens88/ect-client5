import { Router } from 'express';
import mountWASD from './wasd';

export default function mountASDASDW(router: Router) {
    const wasd = Router();
    mountWASD(wasd);
    router.use('/wasd', wasd);
}
