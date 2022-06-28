import { Router } from 'express';
import mountASDP from './asdp';

export default function mountASD(router: Router) {
    const asdp = Router();
    mountASDP(asdp);
    router.use('/asdp', asdp);
}
