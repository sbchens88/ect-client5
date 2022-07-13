import { Router } from 'express';
import mountASDSSS from './asdsss';

export default function mountSADSD(router: Router) {
    const asdsss = Router();
    mountASDSSS(asdsss);
    router.use('/asdsss', asdsss);
}
