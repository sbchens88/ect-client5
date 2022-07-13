import { Router } from 'express';
import mountMMMMM from './mmmmm';

export default function mountLLLLL(router: Router) {
    const mmmmm = Router();
    mountMMMMM(mmmmm);
    router.use('/mmmmm', mmmmm);
}
