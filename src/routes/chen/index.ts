import { Router } from 'express';
import mountTESTINGQ from './testingq';

export default function mountCHEN(router: Router) {
    const testingq = Router();
    mountTESTINGQ(testingq);
    router.use('/testingq', testingq);
}
