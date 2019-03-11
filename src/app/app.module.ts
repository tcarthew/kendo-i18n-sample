import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateMessageService } from './services/translate-message-service';
import { MessageService } from '@progress/kendo-angular-l10n';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MessageService, useClass: TranslateMessageService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
