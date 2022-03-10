import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular teszt';


  calcTrinagleArea(base : number,height: number){
    return base * height / 2;
  }
  calcTrinaglePerimeter(aSide:number,bSide:number,cSide:number){
    return aSide + bSide + cSide;
  }
}
