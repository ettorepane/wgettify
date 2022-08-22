import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-selector',
  templateUrl: './main-selector.component.html',
  styleUrls: ['./main-selector.component.css']
})
export class MainSelectorComponent implements OnInit {

  fileMode=false;
  constructor() { }

  ngOnInit(): void {
  }

  switchMode(){
    this.fileMode=!this.fileMode;
  }

}
