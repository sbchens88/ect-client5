import { Router } from 'express';
import * as asdasdwController from 'src/controllers/asdasdw';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDASDW(router: Router) {
    router.get(
        '/asdds',
        validate(validators.Qwec),
        respond((req: any) => asdasdwController.qwec(Object.assign({}, req.params, req.body, req.query)))
    );
}
