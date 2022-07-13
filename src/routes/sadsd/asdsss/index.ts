import { Router } from 'express';
import * as asdsssController from 'src/controllers/asdsss';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDSSS(router: Router) {
    router.get(
        '/ssssddwww',
        validate(validators.Qwed),
        respond((req: any) => asdsssController.qwed(Object.assign({}, req.params, req.body, req.query)))
    );
}
