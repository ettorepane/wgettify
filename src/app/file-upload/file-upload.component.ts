import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms'

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
      this.http.post('https://tmpfiles.org/api/v1/upload', formData).subscribe(res => {
        console.log(res);
        //convert response to json
        this.responseUrl = JSON.parse(JSON.stringify(res)).data.url;
        this.responseUrl = this.responseUrl.replace('tmpfiles.org/', 'tmpfiles.org/dl/');
        this.loading = false;
        this.calc();
        //alert("File uploaded successfully: "+this.responseUrl);
      }
      );
    }
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
  }


}
