import { Component , Output, EventEmitter} from '@angular/core';
import { message } from 'src/app/Interfaces/message';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent {

  constructor(private MessageService: MessagesService){}

  @Output() onNewMessage: EventEmitter<message> = new EventEmitter
  name: string = "Jan"
  text!: string

  onSubmit(){
    let newMessage: message = {
      name: this.name,
      text: this.text
    }
    this.onNewMessage.emit(newMessage)
    this.text = ""
  }

}
