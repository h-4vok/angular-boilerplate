import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient, private fileSaverService: FileSaverService) {
  }
  onDown(url, fileName) {
    /*Use de heroku proxy for example*/
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    this.http.get(proxyurl + url, {
      observe: 'response',
      responseType: 'blob'
    }).subscribe((res) => {
      this.fileSaverService.save((<any>res).body, fileName);
    });
  }

}
