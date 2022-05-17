import { Router } from 'express';
import * as qwepepeController from 'src/controllers/qwepepe';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountQWEPEPE(router: Router) {
    router.patch(
        '/we2',
        validate(validators.Qwe),
        respond((req: any) => qwepepeController.qwe(Object.assign({}, req.params, req.body, req.query)))
    );
}
