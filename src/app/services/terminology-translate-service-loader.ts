import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TranslateLoader } from '@ngx-translate/core';
import { map } from 'rxjs/operators';

@Injectable()
export class TerminologyTranslateServiceLoader implements TranslateLoader {

    constructor(private http: HttpClient) { }

    getTranslation(language: string): Observable<any> {
        // the url below, in the portal app, should point to an api call
        // which returns the Terminology model
        return this.http.get(`http://localhost:3000/translations`)
            .pipe(map(
                (response: any) => {
                    // ignore nore the language passed in as in our app it does not matter
                    // the translation is not by language, but just different names required
                    // by different agencies.
                    console.log(response);
                    console.log('key: ', language);
                    return response;
                }
            ));
    }
}