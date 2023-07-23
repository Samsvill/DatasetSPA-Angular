import { Component, Input } from '@angular/core';

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
  public setosa: Flower[] = [] 

  @Input() species : string = '';
  @Input() petalLength : string = '';
  @Input() petalWidth : string = '';
  


 ngOnInit(){
  this.dataProvider.getResponse().subscribe((response) => {
    this.data = (response as Flower[])
    this.setosa = this.data.filter((flor)=> flor.species == 'setosa' )
  })
 }
 constructor(private dataProvider: IrisService){ }

}
