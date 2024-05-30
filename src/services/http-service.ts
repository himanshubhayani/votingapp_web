import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
// import { InterceptorSkipHeader } from './http-intercepter.service';

@Injectable({
    providedIn: 'root'
  })
export class HttpService {
    //baseURL = environment.api_URL;
    baseURL: string =  environment.apiUrl;
    constructor(private http: HttpClient) { }

    get(url: string) {
        return this.http.get(this.baseURL + url,);
    }

    post(url: string, data: any) {
        return this.http.post(this.baseURL + url, data);
    }
}
