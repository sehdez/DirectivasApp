import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[costumIf]'
})
export class CustomIfDirective {

  // @Input() set customIf( condicion: boolean ){
  //   if (condicion){
  //     this.viewContainer.createEmbeddedView( this.templateRef );
  //   } else {
  //     this.viewContainer.clear();
  //   }
  // }
  // constructor( private templateRef: TemplateRef<HTMLElement>, 
  //              private viewContainer:ViewContainerRef ) {
  //  }


}
