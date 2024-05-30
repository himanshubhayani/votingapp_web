import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  constructor(private httpService: HttpService) {}

  getCandidates() {
    return this.httpService.get('/Candidates');
  }

  addCandidate(name: string) {
    return this.httpService.post('/Candidates',{name});
  }
}
