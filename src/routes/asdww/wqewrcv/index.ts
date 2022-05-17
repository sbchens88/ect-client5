import { Router } from 'express';
import * as wqewrcvController from 'src/controllers/wqewrcv';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountWQEWRCV(router: Router) {
    router.put(
        '/asdwep5',
        validate(validators.Qdfsvdg),
        respond((req: any) => wqewrcvController.qdfsvdg(Object.assign({}, req.params, req.body, req.query)))
    );
}
