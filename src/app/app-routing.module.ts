import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { formComponent } from './user/form/form.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
	{ path: '*', component: UserListComponent },
      { path: '', pathMatch: 'full', redirectTo: '/userList' },
      { path: 'userList', component: UserListComponent},
	  { path: 'userDetails', component: UserDetailsComponent},
	  { path: 'form', component: formComponent}
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }