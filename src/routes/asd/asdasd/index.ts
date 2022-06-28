import { Router } from 'express';
import * as asdasdController from 'src/controllers/asdasd';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDASD(router: Router) {
    router.get(
        '/ssdd',
        validate(validators.Qweqw),
        respond((req: any) => asdasdController.qweqw(Object.assign({}, req.params, req.body, req.query)))
    );
}
