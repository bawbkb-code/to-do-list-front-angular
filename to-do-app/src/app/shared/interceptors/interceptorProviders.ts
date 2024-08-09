import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpCoreInterceptor } from "./http-core.interceptor";

export const interceptorProviders =
    [
        { provide: HTTP_INTERCEPTORS, useClass: HttpCoreInterceptor, multi: true }
    ];