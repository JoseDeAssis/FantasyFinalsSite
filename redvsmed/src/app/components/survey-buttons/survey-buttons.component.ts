import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-survey-buttons',
  templateUrl: './survey-buttons.component.html',
  styleUrls: ['./survey-buttons.component.css']
})
export class SurveyButtonsComponent implements OnInit {

  @Output() winnerPressed = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  correctWinner() {
    this.winnerPressed.emit(true)
  }

}
