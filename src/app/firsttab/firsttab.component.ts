import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import 'sweetalert2/src/sweetalert2.scss';
import { title } from 'process';

@Component({
  selector: 'app-firsttab',
  templateUrl: './firsttab.component.html',
  styleUrls: ['../../../node_modules/startbootstrap-sb-admin-2/css/sb-admin-2.css',
'../../../node_modules/sweetalert2/dist/sweetalert2.css',
'../../../node_modules/sweetalert2/dist/sweetalert2.min.css']
})
export class FirsttabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
ticketdetailsmonthly(){
  Swal.fire(
   title,
  

)
}
}
