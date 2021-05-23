import { Component, OnInit } from '@angular/core';
 import { Router, ActivatedRoute } from '@angular/router';
 import {userService} from './../userservice.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public userDetails = [];
  constructor(private userservice: userService, private router: Router,
        private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
	  debugger;
	  let id = this.router.url.split('=')[1];
	  //id = Number(id);
	  this.userservice.userDetails(id).subscribe((rs) => {
		 // this.userData = new MatTableDataSource();
		 debugger;
        this.userDetails = rs.data;
		  //this.userDataVisible = true;
		  
	  })
  }

}
