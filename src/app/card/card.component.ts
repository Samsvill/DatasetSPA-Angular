import { Component } from '@angular/core';

//interfaz Flower
import { Flower } from '../interfaces/flower';

//servicio Iris
import { IrisService } from '../providers/iris.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {

  public data: Flower[] = []
 name: string = 'card 1'; 

 ngOnInit(){
  this.dataProvider.getResponse().subscribe((response) => {
    this.data = (response as Flower[])
  })
 }
 constructor(private dataProvider: IrisService){ }

}
