import { Router } from 'express';
import mountWQEWRCV from './wqewrcv';

export default function mountASDWW(router: Router) {
    const wqewrcv = Router();
    mountWQEWRCV(wqewrcv);
    router.use('/wqewrcv', wqewrcv);
}
