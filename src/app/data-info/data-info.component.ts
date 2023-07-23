import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-info',
  templateUrl: './data-info.component.html',
  styleUrls: ['./data-info.component.css']
})
export class DataInfoComponent {
  @Input() title: string = '';
  @Input() info: string = '';
  @Input() img: string = '';
}
