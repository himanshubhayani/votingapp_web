import { Component, OnInit } from '@angular/core';
import { VoterService } from '../../services/voter.service';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
interface Voter {
  id: number;
  name: string;
  hasVoted: boolean;
}
@Component({
  selector: 'app-voter',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,HttpClientModule],
  providers:[VoterService],
  templateUrl: './voter.component.html',
  styleUrl: './voter.component.scss'
})
export class VoterComponent implements OnInit{
  voters: any[] = [];
  newVoterName: string = '';

  constructor(private voterService: VoterService) {}

  ngOnInit(): void {
    this.fetchVoters();
  }

  fetchVoters() {
    this.voterService.getVoters().subscribe((data:any) => {
      this.voters = data;
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

}
