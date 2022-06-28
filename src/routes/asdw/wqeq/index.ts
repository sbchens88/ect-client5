import { Router } from 'express';
import * as wqeqController from 'src/controllers/wqeq';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountWQEQ(router: Router) {
    router.get(
        '/wqe',
        validate(validators.Qwe),
        respond((req: any) => wqeqController.qwe(Object.assign({}, req.params, req.body, req.query)))
    );
}
