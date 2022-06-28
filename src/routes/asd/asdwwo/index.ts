import { Router } from 'express';
import * as asdwwoController from 'src/controllers/asdwwo';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDWWO(router: Router) {
    router.get(
        '/aqwsd',
        validate(validators.Qwed),
        respond((req: any) => asdwwoController.qwed(Object.assign({}, req.params, req.body, req.query)))
    );
}
