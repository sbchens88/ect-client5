import { Router } from 'express';
import * as wqpeController from 'src/controllers/wqpe';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountWQPE(router: Router) {
    router.get(
        '/qwed',
        validate(validators.Qwerf),
        respond((req: any) => wqpeController.qwerf(Object.assign({}, req.params, req.body, req.query)))
    );
}
