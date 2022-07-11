import { Router } from 'express';
import * as asdasController from 'src/controllers/asdas';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDAS(router: Router) {
    router.get(
        '/dasd',
        validate(validators.Wsdcvf),
        respond((req: any) => asdasController.wsdcvf(Object.assign({}, req.params, req.body, req.query)))
    );
}
