import { Component, OnInit } from '@angular/core';
import { VotingService } from '../../services/voting.service';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { VoterService } from '../../services/voter.service';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-vote-casting',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,HttpClientModule],
  providers:[VoterService,VotingService,CandidateService],
  templateUrl: './vote-casting.component.html',
  styleUrl: './vote-casting.component.scss'
})
export class VoteCastingComponent implements OnInit {
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
    this.voterService.getVoters().subscribe((data:any) => {
      this.voters = data;
    });
  }

  fetchCandidates() {
    this.candidateService.getCandidates().subscribe((data:any) => {
      this.candidates = data;
    });
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
