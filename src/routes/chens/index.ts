import { Router } from 'express';
import * as chensController from 'src/controllers/chens';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountCHENS(router: Router) {
    router.get(
        '/s8d',
        validate(validators.Sdojm),
        respond((req: any) => chensController.sdojm(Object.assign({}, req.params, req.body, req.query)))
    );
}
