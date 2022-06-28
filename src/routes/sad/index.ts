import { Router } from 'express';
import mountASD from './asd';
import mountASDASDAS from './asdasdas';

export default function mountSAD(router: Router) {
    const asd = Router();
    mountASD(asd);
    router.use('/asd', asd);

    const asdasdas = Router();
    mountASDASDAS(asdasdas);
    router.use('/asdasdas', asdasdas);
}
