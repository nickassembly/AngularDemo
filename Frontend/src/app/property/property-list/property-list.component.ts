import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "PB Dungeon",
      "Type": "House",
      "Price": 120000
    },
    {
      "Id": 2,
      "Name": "Keller Cave",
      "Type": "House",
      "Price": 67000
    },
    {
      "Id": 3,
      "Name": "Burger Mansion",
      "Type": "House",
      "Price": 1000000
    },
    {
      "Id": 4,
      "Name": "Georgia House",
      "Type": "House",
      "Price": 86000
    },
    {
      "Id": 5,
      "Name": "Idaho House",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 6,
      "Name": "Walmart Store",
      "Type": "House",
      "Price": 900000
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
