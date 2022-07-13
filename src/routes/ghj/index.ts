import { Router } from 'express';
import * as ghjController from 'src/controllers/ghj';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountGHJ(router: Router) {
    router.post(
        '/ppppp',
        validate(validators.Dfghjk),
        respond((req: any) => ghjController.dfghjk(Object.assign({}, req.params, req.body, req.query)))
    );
}
