import {Component, OnInit, ViewChild} from '@angular/core';
import {cricketer} from '../first/first.component';
import {CricketersViewComponent} from './cricketers-view/cricketers-view.component';

@Component({
  selector: 'app-cricketers',
  templateUrl: './cricketers.component.html',
  styleUrls: ['./cricketers.component.scss']
})
export class CricketersComponent implements OnInit {

  @ViewChild('viewChildComponent') viewChildComponent: CricketersViewComponent;
  activeCricketers: cricketer;

  cricketers: Array<cricketer> = [
    {
      name: 'Sanath Jayasuriya',
      type: 'All rounder'
    },
    {
      name: 'Chaminda Vaas',
      type: 'bowler'
    },
    {
      name: 'Mahela Jayawardane',
      type: 'batsman'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  selectCricketer(x: cricketer) {
    this.activeCricketers = x;
  }

  loadParentData(s) {
    this.activeCricketers.name = s;
    alert('load data ${s}');
  }
}
