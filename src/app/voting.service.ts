import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VotingService {
  private baseUrl = 'https://localhost:7011/api/Voting/Vote'; // Update the base URL according to your backend

  constructor(private http: HttpClient) {}

  submitVote(voterId: number, candidateId: number) {
    const url = `${this.baseUrl}?voterId=${voterId}&candidateId=${candidateId}`;
    return this.http.post(url, {});
  }
}
