import { Router } from 'express';
import * as sadadsController from 'src/controllers/sadads';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountSADADS(router: Router) {
    router.get(
        '/assss',
        validate(validators.Wdsa),
        respond((req: any) => sadadsController.wdsa(Object.assign({}, req.params, req.body, req.query)))
    );
}
