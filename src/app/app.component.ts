import { Component } from '@angular/core';
import { Flower } from './interfaces/flower';
import { IrisService } from './providers/iris.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public data: Flower[] = []
  public versicolor: Flower[] = []
  public virginica: Flower[] = []
  public setosa: Flower[] = []

  public versiprom = 0
  public virprom = 0
  public setoprom = 0

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = (response as Flower[])
      this.versicolor = this.data.filter((flor) => flor.species == 'versicolor')
      this.setosa = this.data.filter((flor) => flor.species == 'setosa')
      this.virginica = this.data.filter((flor) => flor.species == 'virginica')

      this.versicolor.forEach(element => {
        this.versiprom += element.petalLength;
      });

      this.virginica.forEach(element => {
        this.virprom += element.petalLength;
      });

      this.setosa.forEach(element => {
        this.setoprom += element.petalLength;
      });

      this.versiprom = this.versiprom/this.versicolor.length
      this.virprom = this.virprom/this.virginica.length
      this.setoprom = this.setoprom/this.setosa.length
      
    })
    

  }
  constructor(private dataProvider: IrisService) { }


  chartOptions = {
    title: {
      text: 'Flower petalLength Graph'
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "setosa", y: 1.467},
        { label: "versicolor", y: 4.26},
        { label: "virginica", y: 5.56}
      ]
    }]
  };
  
}