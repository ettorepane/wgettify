import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-selector',
  templateUrl: './main-selector.component.html',
  styleUrls: ['./main-selector.component.css']
})
export class MainSelectorComponent implements OnInit {


  //TODO: change filemode to int :-)
  mode = 'url';
  constructor() { }

  ngOnInit(): void {
  }

  switchMode(newMode: any){
    document.getElementById(this.mode+"-tab")?.classList.remove("active");
    this.mode=newMode;
    document.getElementById(this.mode+"-tab")?.classList.add("active");
  }

}
