import { Router } from 'express';
import mountQWE from './qwe';

export default function mountQWEW(router: Router) {
    const qwe = Router();
    mountQWE(qwe);
    router.use('/qwe', qwe);
}
