import { Router } from 'express';
import mountSDFE from './sdfe';

export default function mountSDF(router: Router) {
    const sdfe = Router();
    mountSDFE(sdfe);
    router.use('/sdfe', sdfe);
}
