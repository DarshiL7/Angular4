import{ Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'loginForm',
    templateUrl: './src/app/Login/login.component.html'

})
export class LoginAutorization{

     constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

}