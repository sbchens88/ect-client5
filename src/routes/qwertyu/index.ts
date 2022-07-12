import { Router } from 'express';
import mountOIUYTR from './oiuytr';

export default function mountQWERTYU(router: Router) {
    const oiuytr = Router();
    mountOIUYTR(oiuytr);
    router.use('/oiuytr', oiuytr);
}
