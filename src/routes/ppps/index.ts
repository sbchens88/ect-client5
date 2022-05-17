import { Router } from 'express';
import mountSDAW from './sdaw';

export default function mountPPPS(router: Router) {
    const sdaw = Router();
    mountSDAW(sdaw);
    router.use('/sdaw', sdaw);
}
