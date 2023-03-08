import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {Observable} from 'rxjs'
import { message } from '../Interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  url: string = "https://lean-coffee-board-api-nextjs.vercel.app/api/questions"

  constructor(private http: HttpClient) {}

  // get messages
  fetchMessages(): Observable <message[]>{
    return this.http.get<message[]>(this.url);
  }

  // sende message
  sendMessage(data:message): Observable <message[]>{
    return this.http.post<message[]>(this.url, data)
  }
}
