import { Router } from 'express';
import mountASDASD from './asdasd';

export default function mountASD(router: Router) {
    const asdasd = Router();
    mountASDASD(asdasd);
    router.use('/asdasd', asdasd);
}
