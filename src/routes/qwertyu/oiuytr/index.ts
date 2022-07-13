import { Router } from 'express';
import * as oiuytrController from 'src/controllers/oiuytr';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators'; 
export default function mountOIUYTR(router: Router) {
    router.get(
        '/llk',
        validate(validators.Bghgjbnv),
        respond((req: any) => oiuytrController.bghgjbnv(Object.assign({}, req.params, req.body, req.query)))
    );
}
