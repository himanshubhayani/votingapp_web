import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root'
})
export class VotingService {
  private baseUrl = environment.apiUrl + '/Voting/Vote';
  constructor(private httpService: HttpService) {}

  submitVote(voterId: number, candidateId: number) {
    // const url = `$?voterId=${voterId}&candidateId=${candidateId}`;
    // return this.http.post(url, {});
    return this.httpService.post('/Voting/Vote'+'?voterId='+voterId+'&candidateId='+candidateId,{});
  }
}
