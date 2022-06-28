import { Router } from 'express';
import * as wasdController from 'src/controllers/wasd';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountWASD(router: Router) {
    router.get(
        '/dasff',
        validate(validators.Sdfss),
        respond((req: any) => wasdController.sdfss(Object.assign({}, req.params, req.body, req.query)))
    );
}
