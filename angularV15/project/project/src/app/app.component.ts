import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   discription:string = 'the string interpolation is the one type of one-way data binding this main work is to convert the .ts file to .html ';
   disc:string = 'the notation is {{}}';
   result = this.discription+this.disc;
   path:string = './assets/img1.jpg';
   d:string = new Date().toLocaleDateString();
   h:string = new Date().toLocaleTimeString();
   m:string = 'checking';
   x:string = "Imthiyaz";
   method(){
    if(this.m == "checking"){
      this.m = "this is testing";
    }else{
      this.m = "checking";
    }
   }
}
