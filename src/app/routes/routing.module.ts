import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from '../components/clients/client/client.component';
import { ProjectListComponent } from '../components/projects/project-list/project-list.component';
import { ProjectComponent } from '../components/projects/project/project.component';

const routes: Routes = [
  { path: 'Client', component: ClientComponent },
  { path: 'Project', component: ProjectListComponent },
  { path: 'Project/Add', component: ProjectComponent },
  { path: 'phases', component: ProjectListComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
