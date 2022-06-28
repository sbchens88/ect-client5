import { Router } from 'express';
import mountASDASDSWW from './asdasdsww';

export default function mountWSDSAD(router: Router) {
    const asdasdsww = Router();
    mountASDASDSWW(asdasdsww);
    router.use('/asdasdsww', asdasdsww);
}
