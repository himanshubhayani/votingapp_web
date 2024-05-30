import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./vote-casting/vote-casting.component').then(c => c.VoteCastingComponent) },
    { path: 'candidate', loadComponent: () => import('./candidate/candidate.component').then(c => c.CandidateComponent) },
    { path: 'voter', loadComponent: () => import('./voter/voter.component').then(c => c.VoterComponent) },
    { path: 'votecast', loadComponent: () => import('./vote-casting/vote-casting.component').then(c => c.VoteCastingComponent) },
];
