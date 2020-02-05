import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  private point1: { x: number, y: number };
  private point2: { x: number, y: number };
  private point3: { x: number, y: number };

  constructor() { }

  ngOnInit() {
  }

  passPoints(...value: string[]) {
    this.point1 = { x: Number.parseInt(value[0]) || 0, y: Number.parseInt(value[1]) || 0 };
    this.point2 = { x: Number.parseInt(value[2]) || 0, y: Number.parseInt(value[3]) || 0 };
    this.point3 = { x: Number.parseInt(value[4]) || 0, y: Number.parseInt(value[5]) || 0 };
    console.log(this.point1);
    console.log(this.point2);
    console.log(this.point3);
  }

}
