import { Methods as HttpMethodsEnum } from "../../../../enums/http/Methods";
import { ResponseType } from "../../../../types/http/ResponseType";
export interface Request {
    id: string;
    domain: string;
    secure: boolean;
    endpoint: string;
    includeSession: boolean;
    method: HttpMethodsEnum;
    responseType: ResponseType;
}
