import express, { Router } from 'express';
import mountAPI from './api';
import mountAuth from './auth';
import respond from 'src/middlewares/respond';
import mountSDF from './sdf';
import mountSAD from './sad';
import mountPPPS from './ppps';
import mountASDAW from './asdaw';
import mountASDSW from './asdsw';
import mountDFPLOD from './dfplod';
import mountASDWW from './asdww';
import mountASD from './asd';
import mountASDASDW from './asdasdw';
import mountASDAEDR from './asdaedr';
import mountQWEW from './qwew';
import mountASDF from './asdf';
import mountQWERTYU from './qwertyu';
import mountGHJ from './ghj';
import mountSADSD from './sadsd';
import mountSDASDVFSD from './sdasdvfsd';
import mountLLLLL from './lllll';

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

    const dfplod = Router();
    mountDFPLOD(dfplod);
    router.use('/dfplod', dfplod);

    const asdww = Router();
    mountASDWW(asdww);
    router.use('/asdww', asdww);

    const asd = Router();
    mountASD(asd);
    router.use('/asd', asd);

    const asdasdw = Router();
    mountASDASDW(asdasdw);
    router.use('/asdasdw', asdasdw);

    const asdaedr = Router();
    mountASDAEDR(asdaedr);
    router.use('/asdaedr', asdaedr);

    const qwew = Router();
    mountQWEW(qwew);
    router.use('/qwew', qwew);

    const asdf = Router();
    mountASDF(asdf);
    router.use('/asdf', asdf);

    const qwertyu = Router();
    mountQWERTYU(qwertyu);
    router.use('/qwertyu', qwertyu);

    const ghj = Router();
    mountGHJ(ghj);
    router.use('/ghj', ghj);

    const sadsd = Router();
    mountSADSD(sadsd);
    router.use('/sadsd', sadsd);

    const sdasdvfsd = Router();
    mountSDASDVFSD(sdasdvfsd);
    router.use('/sdasdvfsd', sdasdvfsd);

    const lllll = Router();
    mountLLLLL(lllll);
    router.use('/lllll', lllll);
}
