import { Component, Input } from '@angular/core';
import { UiChangesService } from 'src/app/services/ui-changes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

 @Input() name: string 

 constructor(private uiservice: UiChangesService){}

 onSubmit(){
   let newName = this.name
   this.uiservice.changeName(newName)
  this.uiservice.toggleLogedIn()
 }



}
