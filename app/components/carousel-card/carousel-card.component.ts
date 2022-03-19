import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {
  @Input() resource:ResourceData;

  url:string;
  imageURL:string;
  name:string;
  id:string;
  category:string;

  constructor() { }

  ngOnInit() {
    // this.url = this.resource.url;
    this.imageURL = this.resource.imageURL;
    this.name = this.resource.name;
    this.id = this.resource.id;
    this.category = this.resource.category;

    this.url = this.category+'/'+this.id
  }

}
