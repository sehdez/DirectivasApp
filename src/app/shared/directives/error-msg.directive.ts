import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  private _color :string = 'red';
  private _mng   :string = 'Texto obligatorio';

  htmlElement!: ElementRef<HTMLElement>;
  @Input() set color( valor:string ){
    this._color = valor;
    this.setColor();
  }
  @Input() set msg (valor:string){
    this._mng = valor;
    this.setMsg();
  }

  @Input() set valido (valor:boolean){
    if(valor){
      this.htmlElement.nativeElement.style.display = 'none'
    }
    else{
      this.htmlElement.nativeElement.style.display = 'block'
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {

    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  
  
  
  ngOnInit(): void {
    this.setClass();
    this.setColor();
    this.setMsg();
   }

   setClass(){
    this.htmlElement.nativeElement.classList.add('form-text');
   }

   setColor(){
    this.htmlElement.nativeElement.style.color = this._color;
   }
   setMsg(){
     this.htmlElement.nativeElement.innerText = this._mng; 
   }
   
}
