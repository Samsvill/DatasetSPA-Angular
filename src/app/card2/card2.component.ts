import { Component,Input } from '@angular/core';

//interfaz Flower
import { Flower } from '../interfaces/flower';

//servicio Iris
import { IrisService } from '../providers/iris.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component {
  public data: Flower[] = []
  public versicolor: Flower[] = [] 

  @Input() species : string = '';
  @Input() petalLength : string = '';
  @Input() petalWidth : string = '';
  


 ngOnInit(){
  this.dataProvider.getResponse().subscribe((response) => {
    this.data = (response as Flower[])
    this.versicolor = this.data.filter((flor)=> flor.species == 'versicolor' )
  })
 }
 constructor(private dataProvider: IrisService){ }
}
