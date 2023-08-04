import { Component, Input } from '@angular/core';

//interfaz Flower
import { Flower } from '../interfaces/flower';

//servicio Iris
import { IrisService } from '../providers/iris.service';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component {
  public data: Flower[] = []
  public virginica: Flower[] = [] 

  @Input() species : string = '';
  @Input() petalLength : string = '';
  @Input() petalWidth : string = '';
  


 ngOnInit(){
  this.dataProvider.getResponse().subscribe((response) => {
    this.data = (response as Flower[])
    this.virginica = this.data.filter((flor)=> flor.species == 'virginica' )
  })
 }
 constructor(private dataProvider: IrisService){ }
}
