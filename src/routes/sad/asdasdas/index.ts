import { Router } from 'express';
import * as asdasdasController from 'src/controllers/asdasdas';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDASDAS(router: Router) {
    router.get(
        '/d',
        validate(validators.Qwedc),
        respond((req: any) => asdasdasController.qwedc(Object.assign({}, req.params, req.body, req.query)))
    );
}
