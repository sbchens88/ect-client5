import { Router } from 'express';
import mountASD from './asd';

export default function mountSAD(router: Router) {
    const asd = Router();
    mountASD(asd);
    router.use('/asd', asd);
}
