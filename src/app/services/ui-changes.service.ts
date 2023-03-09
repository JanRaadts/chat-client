import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiChangesService {

  isLogedIn: boolean = false
  name: string = ""
  private nameSubject = new Subject<any>();
  private isLogedInSubject = new Subject<any>();


  constructor() { }

  toggleLogedIn():void{
    this.isLogedIn = !this.isLogedIn;
    this.isLogedInSubject.next(this.isLogedIn);
      }
    
      onToggleLogedIn():Observable<any>{
        return this.isLogedInSubject.asObservable();
      }


  changeName(newName: string):void{
        this.name = newName;
        this.nameSubject.next(this.name);
          }

          becomeName(){
            this.nameSubject.next(this.name);
          }
        
      onChangedName():Observable<any>{
            return this.nameSubject.asObservable();
          }


}
