import { Router } from 'express';
import * as sdawController from 'src/controllers/sdaw';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountSDAW(router: Router) {
    router.get(
        '/weewq',
        validate(validators.Qwewew),
        respond((req: any) => sdawController.qwewew(Object.assign({}, req.params, req.body, req.query)))
    );
}
