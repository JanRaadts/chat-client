import { Component } from '@angular/core';
import { UiChangesService } from './services/ui-changes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLogedIn: boolean = false
  subscription!: Subscription;


  constructor(private uiservice: UiChangesService){
    this.subscription = this.uiservice.onToggleLogedIn().subscribe(value => this.isLogedIn = value)
  }
}
