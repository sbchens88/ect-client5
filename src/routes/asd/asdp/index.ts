import { Router } from 'express';
import * as asdpController from 'src/controllers/asdp';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDP(router: Router) {
    router.get(
        '/ww',
        validate(validators.Ewqrqp),
        respond((req: any) => asdpController.ewqrqp(Object.assign({}, req.params, req.body, req.query)))
    );
}
