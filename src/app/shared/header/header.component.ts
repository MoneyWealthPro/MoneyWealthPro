import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    $('.open-menu').click( function (){    
    $('div').addClass('activee');  
    });

    $('.close-menu').click( function (){

    $('div').removeClass('activee'); 
    });
  }
  // Routing Functions
  home() {
    this.router.navigate(['/'])
  }
  plans() {
    this.router.navigate(['/plans'])
  }
}
