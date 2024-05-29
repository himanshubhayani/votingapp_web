import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private baseUrl = 'https://localhost:7011/api/Candidates'; // Update the base URL according to your backend

  constructor(private http: HttpClient) {}

  getCandidates() {
    return this.http.get<any[]>(this.baseUrl);
  }

  addCandidate(name: string) {
    return this.http.post(this.baseUrl, { name });
  }
}
