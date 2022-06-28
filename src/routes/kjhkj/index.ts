import { Router } from 'express';
import mountQWE from './qwe';

export default function mountKJHKJ(router: Router) {
    const qwe = Router();
    mountQWE(qwe);
    router.use('/qwe', qwe);
}
