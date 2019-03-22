import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateMessageService } from './services/translate-message-service';
import { MessageService } from '@progress/kendo-angular-l10n';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClient } from '@angular/common/http';
import { TranslationService } from './services/translate-service-loader';
import { HttpClientModule } from '@angular/common/http';

// export function HttpLoaderFactory(httpClient: HttpClient) {

//   return new TranslateHttpLoader(httpClient, 'http://localhost:3000/data/', 'data.json')
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslationService,
        // useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: MessageService, useClass: TranslateMessageService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
