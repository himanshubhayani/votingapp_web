import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  private baseUrl = 'https://localhost:7011/api/Voters'; // Update the base URL according to your backend

  constructor(private http: HttpClient) {}

  getVoters() {
    return this.http.get<any[]>(this.baseUrl);
  }

  addVoter(name: string) {
    return this.http.post(this.baseUrl, { name });
  }
}
