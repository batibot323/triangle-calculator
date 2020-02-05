import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  private point1: { x: number, y: number };
  private point2: { x: number, y: number };

  constructor() { }

  ngOnInit() {
  }

  passPoints(...value: string[]) {
    this.point1 = { x: Number.parseInt(value[0]), y: Number.parseInt(value[1]) };
    this.point2 = { x: Number.parseInt(value[2]), y: Number.parseInt(value[3]) };
    console.log(this.point1);
    console.log(this.point2);
  }

}
