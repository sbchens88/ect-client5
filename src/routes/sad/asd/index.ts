import { Router } from 'express';
import * as asdController from 'src/controllers/asd';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASD(router: Router) {
    router.post(
        '/asdww',
        validate(validators.Qwe),
        respond((req: any) => asdController.qwe(Object.assign({}, req.params, req.body, req.query)))
    );
}
