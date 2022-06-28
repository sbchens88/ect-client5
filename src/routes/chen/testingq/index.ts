import { Router } from 'express';
import * as testingqController from 'src/controllers/testingq';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountTESTINGQ(router: Router) {
    router.get(
        '/letsTest',
        validate(validators.Qwerrrgjjgmoo),
        respond((req: any) => testingqController.qwerrrgjjgmoo(Object.assign({}, req.params, req.body, req.query)))
    );
}
