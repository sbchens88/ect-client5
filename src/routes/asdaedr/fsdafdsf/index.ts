import { Router } from 'express';
import * as fsdafdsfController from 'src/controllers/fsdafdsf';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountFSDAFDSF(router: Router) {
    router.get(
        '/sdf',
        validate(validators.Dsadqasd),
        respond((req: any) => fsdafdsfController.dsadqasd(Object.assign({}, req.params, req.body, req.query)))
    );
}
