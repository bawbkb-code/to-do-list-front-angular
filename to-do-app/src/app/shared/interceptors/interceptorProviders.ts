import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpCoreInterceptor } from "./http-core.interceptor";

export const interceptorProviders =
    [
        { provide: HTTP_INTERCEPTORS, useClass: HttpCoreInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: RequestTimestampService, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: AjaxBusyIdentifierInterceptorService, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: XML2JsonInterceptorService, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorNotifierService, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptorService, multi: true }    
    ];