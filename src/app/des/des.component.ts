import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';  

@Component({
  selector: 'app-des',
  templateUrl: './des.component.html',
  styleUrls: ['./des.component.css']
})
export class DesComponent implements OnInit {


  plainText:string;  
  encryptText: string;  
  encPassword: string;  
  decPassword:string;  
  conversionEncryptOutput: string;  
  conversionDecryptOutput: string;  

  constructor() { }

  ngOnInit(): void {
  }

  convertText(conversion:string) {  
    if (conversion=="encrypt") {  
      this.conversionEncryptOutput = CryptoJS.DES.encrypt(this.plainText.trim(), this.encPassword.trim()).toString();  
    }  
    else {  
      this.conversionDecryptOutput = CryptoJS.DES.decrypt(this.encryptText.trim(), this.decPassword.trim()).toString(CryptoJS.enc.Utf8);  

  }  
}  

}
