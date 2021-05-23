import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { formComponent } from './user/form/form.component';
import { userService } from './user/userservice.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,AppRoutingModule,HttpClientModule,BrowserAnimationsModule ],
  declarations: [ AppComponent,UserListComponent,UserDetailsComponent,formComponent ],
  providers: [userService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }