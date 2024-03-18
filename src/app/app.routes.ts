import { Routes } from '@angular/router';
import path from 'path';
import { CandidatureComponent } from './views/components/card/candidature.component';
import { ListeCandidatureComponent } from './views/components/card/liste-candidature.component';
import { ProfilCandidatComponent } from './views/components/card/profil-candidat.component';

export const routes: Routes = [
    {
        path : 'user', children : [
            { 
                path : 'candidat', component : CandidatureComponent 
            },
            { 
                path : 'liste', component : ListeCandidatureComponent 
            },
            {
                path : 'profil', component : ProfilCandidatComponent
            }
        ]
    },
];
