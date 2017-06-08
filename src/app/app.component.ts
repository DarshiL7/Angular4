import { Component } from '@angular/core';
import { LoginAutorization } from './Login/login.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'angular2-app',
    templateUrl: './src/app/app.component.html',
    styleUrls:['./src/app/app.component.css']
})

export class AppComponent extends LoginAutorization {
    
  
    public userName: string ="Bipender Singh";
    open(content){
        super.open(content);
    }

    
}