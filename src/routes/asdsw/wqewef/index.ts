import { Router } from 'express';
import * as wqewefController from 'src/controllers/wqewef';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountWQEWEF(router: Router) {
    router.put(
        '/werr3',
        validate(validators.Qwrfdf),
        respond((req: any) => wqewefController.qwrfdf(Object.assign({}, req.params, req.body, req.query)))
    );
}
