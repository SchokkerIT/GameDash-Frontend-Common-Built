import { Request as IRequest } from 'interfaces/api/client/request/Request';
import { Response as IResponse } from 'interfaces/api/client/request/Response';
export interface IResult {
    request: IRequest;
    response: IResponse;
}
