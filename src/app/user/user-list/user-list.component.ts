import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import {userService} from './../userservice.service';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  public userData = [];
  public userDataVisible = false;
  public columnNames: string[] = ['email','first_name'];
  constructor(private userservice: userService, private router: Router) { }

  ngOnInit() {
	  this.userservice.LoadData().subscribe((rs) => {
        this.userData = rs.data;
		  this.userDataVisible = true;
		  
	  }) 
	  
  }
  userDetails(id) {
	 this.router.navigate(['/userDetails', { id: id }]);
  }
}
