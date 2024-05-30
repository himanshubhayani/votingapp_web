import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { CandidateService } from '../services/candidate.service';
import { VoterService } from '../services/voter.service';
import { VotingService } from '../services/voting.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../services/http-service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,HttpClientModule],
  providers:[HttpService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}