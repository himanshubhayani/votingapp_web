import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CandidateService } from './candidate.service';
import { VoterService } from './voter.service';
import { VotingService } from './voting.service';
import { HttpClientModule } from '@angular/common/http';

interface Voter {
  id: number;
  name: string;
  hasVoted: boolean;
}

interface Candidate {
  name: string;
  votes: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,HttpClientModule],
  providers:[VoterService,VotingService,CandidateService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  voters: any[] = [];
  candidates: any[] = [];
  selectedVoter: any;
  selectedCandidate: any;
  newVoterName: string = '';
  newCandidateName: string = '';

  constructor(private voterService: VoterService, private candidateService: CandidateService, private votingService: VotingService) {}

  ngOnInit(): void {
    this.fetchVoters();
    this.fetchCandidates();
  }

  fetchVoters() {
    this.voterService.getVoters().subscribe(data => {
      this.voters = data;
    });
  }

  fetchCandidates() {
    this.candidateService.getCandidates().subscribe(data => {
      this.candidates = data;
    });
  }

  addVoter() {
    if (this.newVoterName) {
      this.voterService.addVoter(this.newVoterName).subscribe(() => {
        this.fetchVoters();
        this.newVoterName = '';
      });
    }
  }

  addCandidate() {
    if (this.newCandidateName) {
      this.candidateService.addCandidate(this.newCandidateName).subscribe(() => {
        this.fetchCandidates();
        this.newCandidateName = '';
      });
    }
  }

  submitVote() {
    if (this.selectedVoter && this.selectedCandidate) {
      this.votingService.submitVote(this.selectedVoter.id, this.selectedCandidate.id).subscribe(() => {
        this.fetchVoters();
        this.fetchCandidates();
        this.selectedVoter = null;
        this.selectedCandidate = null;
      });
    }
  }
}