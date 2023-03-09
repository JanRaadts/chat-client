import { Component , Output, EventEmitter} from '@angular/core';
import { nanoid } from 'nanoid';
import { message } from 'src/app/Interfaces/message';
import { MessagesService } from 'src/app/services/messages.service';
import { UiChangesService } from '../../services/ui-changes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent {

  @Output() onNewMessage: EventEmitter<message> = new EventEmitter
  text!: string
  subscription!: Subscription;
  name: string = ""

  constructor(private uiservice: UiChangesService){
    this.subscription = this.uiservice.onChangedName().subscribe(value => this.name = value)
  }

  onSubmit(){
    this.uiservice.becomeName()
    let newMessage: message = {
      id: nanoid(),
      name: this.name,
      text: this.text,
    }
    this.onNewMessage.emit(newMessage)
    this.text = ""
  }

}
