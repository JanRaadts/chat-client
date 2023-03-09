import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { AppComponent } from './app.component';
import { MessagesContainerComponent } from './components/messages-container/messages-container.component';
import { MessageComponent } from './components/message/message.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { LoadingAnimationComponent } from './components/loading-animation/loading-animation.component';

export function playerFactory(): any {  
  return import('lottie-web');
}


@NgModule({
  declarations: [
    AppComponent,
    MessagesContainerComponent,
    MessageComponent,
    MessageFormComponent,
    LoadingAnimationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
