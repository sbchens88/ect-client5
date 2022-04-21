import { Router } from 'express';
import * as sdfeController from 'src/controllers/sdfe';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountSDFE(router: Router) {
    router.get(
        '/sff',
        validate(validators.Df),
        respond((req: any) => sdfeController.df(Object.assign({}, req.params, req.body, req.query)))
    );
}
