import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-calculus',
  templateUrl: './main-calculus.component.html',
  styleUrls: ['./main-calculus.component.css']
})
export class MainCalculusComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  wgetoutput = "";
  curloutput = "";
  urlinput = "";
  sudo = false;

  onUrlChange(event: any) {
    //try to get the header of the url
    this.urlinput = event.target.value;
    this.calc();
  }

  calc(){
    if (this.urlinput.length > 0) {
      if(this.sudo) {
        this.wgetoutput = "sudo wget --content-disposition --trust-server-names " + this.urlinput;
        this.curloutput = "sudo curl -O -J --location-trusted --max-redirs 10 " + this.urlinput;
      } else {
        this.wgetoutput = "wget --content-disposition --trust-server-names " + this.urlinput;
        this.curloutput = "curl -O -J --location-trusted --max-redirs 10 " + this.urlinput;
      }
    } else {
      this.wgetoutput = "";
      this.curloutput = "";
    }
  }

  onUrlOutOfFocus() {
  }

  onSudoChange(event: any) {
    this.sudo = event.target.checked;
    this.calc();
  }

  copyWgetClipboard() {
    navigator.clipboard.writeText(this.wgetoutput);
  }
  copyCurlClipboard() {
    navigator.clipboard.writeText(this.curloutput);
  }
 //wget --content-disposition --trust-server-names
}
