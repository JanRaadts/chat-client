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
    this.messagesService.fetchMessages().subscribe((messages) => this.messages = messages.reverse())
  }

  addMessage(message: message){
    let newMessage = message
    this.messagesService.sendMessage(message).subscribe((message) => (this.messages.unshift(newMessage)))
  }
  
}
