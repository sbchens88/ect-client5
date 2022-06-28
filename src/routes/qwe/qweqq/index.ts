import { Router } from 'express';
import * as qweqqController from 'src/controllers/qweqq';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountQWEQQ(router: Router) {
    router.get(
        '/q2',
        validate(validators.Qwerr),
        respond((req: any) => qweqqController.qwerr(Object.assign({}, req.params, req.body, req.query)))
    );
}
