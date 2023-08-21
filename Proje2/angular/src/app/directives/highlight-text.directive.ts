import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective implements OnInit{

  //Karsılıgı elemnt docament.getElementById() ile secilir
  //element servis sayesinde iilgili tüm html elemntine  bagalanıp,JS ssciptçalıştırılabilir ve tasarım uygulayabilriz
  @Input() content:string = '';
  @Input() visible:boolean = false;
  
  constructor(private elementRef:ElementRef) { 
   //elementin referansın nativeElement üzerinden ulasırız.
      this.elementRef.nativeElement.style.color = "red";
      this.elementRef.nativeElement.style.backgroundColor = "blue";
      

      //document.getElementById()?.style.color
  }
  ngOnInit(): void {
    if(this.content !=''){
      this.elementRef.nativeElement.innerText = this.content;
    }
    console.log('visible',this.visible);
    
    if(this.visible){
      this.elementRef.nativeElement.style.display = 'none';
    }
    
  }
      @HostListener('mouseenter') onMouseEnter() {
        this.elementRef.nativeElement.style.textDecoration = "underline";

      }
      
      @HostListener('mouseleave') onMouseleave() {
        this.elementRef.nativeElement.style.textDecoration = "none";

      }
  

}
