import { Component, Input, Output, EventEmitter } from '@angular/core';
import { message } from 'src/app/Interfaces/message';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [
    trigger('fadeIn',[
      transition(':enter', [
        style({ opacity: 0, transform: 'translate(-600px, 0)' }),
        animate('500ms', style({opacity: 1, transform: 'translate(0, 0)'}))
      ]),  
      transition(':leave', [
        style({ opacity: 1, transform: 'translate(0, 0)' }),
        animate('500ms', style({opacity: 0, transform: 'translate(-600px, 0)'}))
      ])
    ])
  ]
})

export class MessageComponent {

  @Output() onDeleteMessage: EventEmitter<message> = new EventEmitter
  @Input() message: any

  deleteMessage(message: message){
    this.onDeleteMessage.emit(message)
  }

}
