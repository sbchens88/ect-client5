import { Router } from 'express';
import * as qweController from 'src/controllers/qwe';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountQWE(router: Router) {
    router.get(
        '/qweee',
        validate(validators.Qweddd),
        respond((req: any) => qweController.qweddd(Object.assign({}, req.params, req.body, req.query)))
    );
}
