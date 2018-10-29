import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BComponent } from './component/b/b.component';

const routes: Routes = [
    {
        path: '',
        component: BComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyChildBRoutingModule { }
