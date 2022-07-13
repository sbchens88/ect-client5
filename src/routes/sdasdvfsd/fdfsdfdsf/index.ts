import { Router } from 'express';
import * as fdfsdfdsfController from 'src/controllers/fdfsdfdsf';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountFDFSDFDSF(router: Router) {
    router.get(
        '/dsfddd',
        validate(validators.Ewrrfdsf),
        respond((req: any) => fdfsdfdsfController.ewrrfdsf(Object.assign({}, req.params, req.body, req.query)))
    );
}
