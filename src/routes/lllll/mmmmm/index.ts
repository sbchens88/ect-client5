import { Router } from 'express';
import * as mmmmmController from 'src/controllers/mmmmm';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountMMMMM(router: Router) {
    router.get(
        '/s',
        validate(validators.Qwewed),
        respond((req: any) => mmmmmController.qwewed(Object.assign({}, req.params, req.body, req.query)))
    );
}
