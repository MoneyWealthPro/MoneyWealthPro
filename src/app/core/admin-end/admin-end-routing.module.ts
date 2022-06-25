import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEndComponent } from './admin-end.component';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';

const routes: Routes = [
  {
    path: '',
    component: AdminEndComponent,
    children: [
      {
      path: 'dashboard',
      component: DashboardPanelComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEndRoutingModule { }
