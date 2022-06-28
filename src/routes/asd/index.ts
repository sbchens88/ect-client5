import { Router } from 'express';
import mountASDASDW from './asdasdw';

export default function mountASD(router: Router) {
    const asdasdw = Router();
    mountASDASDW(asdasdw);
    router.use('/asdasdw', asdasdw);
}
