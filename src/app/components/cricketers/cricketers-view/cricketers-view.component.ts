import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {cricketer} from '../../first/first.component';

@Component({
  selector: 'app-cricketers-view',
  templateUrl: './cricketers-view.component.html',
  styleUrls: ['./cricketers-view.component.scss']
})
export class CricketersViewComponent implements OnInit {
  submitName: string;
  @Input() cricketer: cricketer;
  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  sendParent() {
    this.change.emit(this.submitName);
  }
}
