import express, { Router } from 'express';
import mountAPI from './api';
import mountAuth from './auth';
import respond from 'src/middlewares/respond';
import mountSDF from './sdf';
import mountSAD from './sad';
import mountPPPS from './ppps';
import mountASDAW from './asdaw';
import mountASDSW from './asdsw';

export default function addRoutes(router: Router) {
    const api = express.Router();
    const auth = express.Router();

    mountAPI(api);
    mountAuth(auth);

    router.get(
        '/',
        respond(() => ({ message: 'Up and running!' }))
    );

    router.use('/api', api);
    router.use('/auth', auth);

    const sdf = Router();
    mountSDF(sdf);
    router.use('/sdf', sdf);

    const sad = Router();
    mountSAD(sad);
    router.use('/sad', sad);

    const ppps = Router();
    mountPPPS(ppps);
    router.use('/ppps', ppps);

    const asdaw = Router();
    mountASDAW(asdaw);
    router.use('/asdaw', asdaw);

    const asdsw = Router();
    mountASDSW(asdsw);
    router.use('/asdsw', asdsw);
}
