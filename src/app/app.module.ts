import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessagesContainerComponent } from './components/messages-container/messages-container.component';
import { MessageComponent } from './components/message/message.component';
import { MessageFormComponent } from './components/message-form/message-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesContainerComponent,
    MessageComponent,
    MessageFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
