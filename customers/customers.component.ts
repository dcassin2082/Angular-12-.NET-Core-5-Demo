import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/shared/user.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: [
  ]
})
export class CustomersComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { }

  checked: boolean = false;
  switchChartType: string = 'Column';

  ngOnInit(): void {
    
    // this.userService.loggedIn = true;
    // if (!this.userService.loggedIn)
    //   this.router.navigateByUrl('/user/login');
    // this.userService.userIsAuthenticated().subscribe((res: any) => {
    //   if(res == false){
    //     this.userService.loggedIn = false;
    //     this.router.navigateByUrl('/user/login');
    //   }
    //   else{
    //     this.userService.loggedIn = true;
    //   }
    // })

    //   this.userService.userIsAuthenticated().subscribe((res: any) => {
    //     debugger;
    //     if(res == false){
    //       this.userService.loggedIn = false;
    //       debugger;
    //       this.router.navigateByUrl('/user/login');
    //     }
    //     else{
    //       this.userService.loggedIn = true;
    //     }
    //   })
    // }
  }

  setChartType() {
    this.checked = !this.checked;
    if (this.checked) {
      this.switchChartType = 'Line'
    }
    else {
      this.switchChartType = 'Column';
    }

  }

}
