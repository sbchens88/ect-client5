import { Router } from 'express';
import * as asdasdsadController from 'src/controllers/asdasdsad';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDASDSAD(router: Router) {
    router.get(
        '/asd',
        validate(validators.Asd),
        respond((req: any) => asdasdsadController.asd(Object.assign({}, req.params, req.body, req.query)))
    );
}
