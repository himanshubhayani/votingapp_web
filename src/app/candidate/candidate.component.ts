import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

interface Candidate {
  name: string;
  votes: number;
}

@Component({
  selector: 'app-candidate',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,HttpClientModule],
  providers:[CandidateService],
  templateUrl: './candidate.component.html',
  styleUrl: './candidate.component.scss'
})
export class CandidateComponent implements OnInit {
  candidates: any[] = [];
  newCandidateName: string = '';

  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.fetchCandidates();
  }

  fetchCandidates() {
    this.candidateService.getCandidates().subscribe((data:any) => {
      this.candidates = data;
    });
  }

  addCandidate() {
    if (this.newCandidateName) {
      this.candidateService.addCandidate(this.newCandidateName).subscribe(() => {
        this.fetchCandidates();
        this.newCandidateName = '';
      });
    }
  }
}
