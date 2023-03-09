import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { message } from '../../Interfaces/message';

@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.scss']
})
export class MessagesContainerComponent implements OnInit{

  messages: message[] = []

  constructor(private messagesService: MessagesService){}

  ngOnInit(): void {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      this.messagesService.fetchMessages().subscribe((messages) => this.messages = messages.reverse())
  }, 4000);
  }

  addMessage(message: message){
    this.messagesService.sendMessage(message).subscribe((mess) => (this.correctId(mess)))
  }

  deleteMessage(message: message){
    this.messagesService.deleteMessage(message).subscribe(() => this.messages = this.messages.filter((mess) => mess.id !== message.id))
  }


  //the id which is coming back from the server after a send is: _id, but we need the id like this: id
  correctId(data: any){
    let id = data._id
    let newMess = {
     id: id,
     name: data.name,
     text: data.text
    }
    this.messages.unshift(newMess)
   }
  
}
