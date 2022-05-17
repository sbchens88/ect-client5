import { Router } from 'express';
import * as sdfsdeweController from 'src/controllers/sdfsdewe';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountSDFSDEWE(router: Router) {
    router.put(
        '/ewrfgv4',
        validate(validators.Qwedfon),
        respond((req: any) => sdfsdeweController.qwedfon(Object.assign({}, req.params, req.body, req.query)))
    );
}
