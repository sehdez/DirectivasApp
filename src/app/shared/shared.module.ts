import { NgModule } from '@angular/core';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    CustomIfDirective,
    ErrorMsgDirective
  ],
  exports:[
    CustomIfDirective,
    ErrorMsgDirective
  ]
})
export class SharedModule { }
