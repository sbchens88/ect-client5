import { Router } from 'express';
import mountASDASDW from './asdasdw';
import mountASD from './asd';

export default function mountASD(router: Router) {
    const asdasdw = Router();
    mountASDASDW(asdasdw);
    router.use('/asdasdw', asdasdw);

    const asd = Router();
    mountASD(asd);
    router.use('/asd', asd);
}
