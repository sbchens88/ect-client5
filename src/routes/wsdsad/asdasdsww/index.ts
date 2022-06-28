import { Router } from 'express';
import * as asdasdswwController from 'src/controllers/asdasdsww';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDASDSWW(router: Router) {
    router.get(
        '/wwdd',
        validate(validators.Qweff),
        respond((req: any) => asdasdswwController.qweff(Object.assign({}, req.params, req.body, req.query)))
    );
}
