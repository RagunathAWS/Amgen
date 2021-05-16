import { Component } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
'../../node_modules/startbootstrap-sb-admin-2/css/sb-admin-2.css',
'../../node_modules/sweetalert2/dist/sweetalert2.css',
'../../node_modules/sweetalert2/dist/sweetalert2.min.css'
],

})
export class AppComponent {
  name = this.loginuserdata();
  UserAccess = 'Admin';
      simpleAlert() {
     Swal.fire(
  'Good job!',
  'You clicked the button!',
      'success')}
      clickFunction() {
    getuserdetails();
    const ragu = 'Tai' + new Date();
    alert(ragu);
      }

loginuserdata(){
  return getuserdetails();
}

}
function getuserdetails(){
  let name: string = 'Ragunath Ranganathan';
  return name;
}

