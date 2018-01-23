import { Component } from '@angular/core';
import { LoginAutorization } from './Login/login.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'angular2-app',
    templateUrl: './src/app/app.component.html',
    styleUrls:['./src/app/app.component.css']
})

export class AppComponent extends LoginAutorization {
    
    public downloadUrls =[
        'https://drive.google.com/uc?authuser=0&id=1HuxqF8iXEi_1cAAH1J9Onw9oUDCwilLG&export=download',
        'https://drive.google.com/uc?authuser=0&id=1FPu8n3qKJGnqVf6RAsUYuI7OUCOtRZ26&export=download'
    ];
    public fileName = ['Javascript','Machine Learning'];
    public userName: string ="Bipender Singh";
    open(content){
        super.open(content);
    }

    
}