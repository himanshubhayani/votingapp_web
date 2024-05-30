import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  private baseUrl = environment.apiUrl + '/Voters';
  constructor(private httpService: HttpService) {}

  getVoters() {
    return this.httpService.get('/Voters');
  }

  addVoter(name: string) {
    return this.httpService.post('/Voters',{name});
  }
}
