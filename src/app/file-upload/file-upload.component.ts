import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { data } from 'jquery';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent{
  constructor(private http: HttpClient) { }

  declare file: File;

  loading: boolean = false;
  responseUrl= "";
  wgetoutput = "";
  curloutput = "";
  sudo = false;
  errorMessage = '';


  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  calc(){
    if (this.responseUrl.length > 0) {
      if(this.sudo) {
        this.wgetoutput = "sudo wget --content-disposition --trust-server-names " + this.responseUrl;
        this.curloutput = "sudo curl -O -J --location-trusted --max-redirs 10 " + this.responseUrl;
      } else {
        this.wgetoutput = "wget --content-disposition --trust-server-names " + this.responseUrl;
        this.curloutput = "curl -O -J --location-trusted --max-redirs 10 " + this.responseUrl;
      }
    } else {
      this.wgetoutput = "";
      this.curloutput = "";
    }
  }

  upload() {
    //if file is not empty
    if (this.file) {
      const formData = new FormData();
      formData.append('file', this.file);
      this.loading = true;
      this.http.post('https://tmpfiles.org/api/v1/upload', formData).subscribe(data => {
        console.log(data);
        //convert response to json
        this.responseUrl = JSON.parse(JSON.stringify(data)).data.url;
        this.responseUrl = this.responseUrl.replace('tmpfiles.org/', 'tmpfiles.org/dl/');
        this.loading = false;
        this.calc();
        //alert("File uploaded successfully: "+this.responseUrl);
      },
      error => {
        console.log("Looks like an error as occured, please send the informations below on a github issue:");
        console.log(error);
        this.loading=false;
        this.errorMessage=error['message'];
        switch(error['status']){
          case 500:
            this.errorMessage="We probably don't like your filename, please, change it. ERROR 500"
        }
      }
      );
    }
  }

  
  tmpbutton(){
    var url = this.responseUrl.replace('tmpfiles.org/dl/','tmpfiles.org/')
    // @ts-ignore: Object is possibly 'null'.
    window.open(url, '_blank').focus();
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

  reset() {
    this.responseUrl = "";
    this.wgetoutput = "";
    this.curloutput = "";
    this.errorMessage= "";
  }


}
