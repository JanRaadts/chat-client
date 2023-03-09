import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.scss']
})
export class LoadingAnimationComponent {

  options: AnimationOptions = {    
    path: '../../assets/lottie/98194-loading.json' 
  };  
 
 onAnimate(animationItem: AnimationItem): void {}

}
