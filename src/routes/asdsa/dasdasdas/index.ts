import { Router } from 'express';
import * as dasdasdasController from 'src/controllers/dasdasdas';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountDASDASDAS(router: Router) {
    router.get(
        '/das',
        validate(validators.Asde),
        respond((req: any) => dasdasdasController.asde(Object.assign({}, req.params, req.body, req.query)))
    );
}
