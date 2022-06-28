import { Router } from 'express';
import mountASDWWO from './asdwwo';

export default function mountASD(router: Router) {
    const asdwwo = Router();
    mountASDWWO(asdwwo);
    router.use('/asdwwo', asdwwo);
}
