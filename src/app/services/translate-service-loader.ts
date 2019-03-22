import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TranslateLoader } from '@ngx-translate/core';
import { switchMap, map, withLatestFrom, filter } from 'rxjs/operators';

@Injectable()
export class TranslationService implements TranslateLoader {

    constructor(private http: HttpClient) { }

    getTranslation(language: string): Observable<any> {
        return this.http.get(`http://localhost:3000/translations`)
            .pipe(map(
                (response: any) => {
                    console.log(response);
                    console.log('key: ', language);
                    return response;
                }
            ));
    }
}