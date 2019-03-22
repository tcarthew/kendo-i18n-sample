import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KendoTranslateService } from './services/kendo-translate-service';
import { MessageService } from '@progress/kendo-angular-l10n';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClient } from '@angular/common/http';
import { TerminologyTranslateServiceLoader } from './services/terminology-translate-service-loader';
import { HttpClientModule } from '@angular/common/http';

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
        useClass: TerminologyTranslateServiceLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: MessageService, useClass: KendoTranslateService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
