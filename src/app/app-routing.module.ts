import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditorFormComponent} from './editor-form/editor-form.component'
import {TinymiceComponent} from './tinymice/tinymice.component'
const routes: Routes = [
  {path:'', component:EditorFormComponent},
  {path:'tiny', component:TinymiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
