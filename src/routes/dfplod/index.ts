import { Router } from 'express';
import mountSDFSDEWE from './sdfsdewe';

export default function mountDFPLOD(router: Router) {
    const sdfsdewe = Router();
    mountSDFSDEWE(sdfsdewe);
    router.use('/sdfsdewe', sdfsdewe);
}
