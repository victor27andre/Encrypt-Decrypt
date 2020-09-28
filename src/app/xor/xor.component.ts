import { Component, OnInit } from '@angular/core';
import { Methods } from './methods';

const methods = new Methods();


@Component({
  selector: 'app-xor',
  templateUrl: './xor.component.html',
  styleUrls: ['./xor.component.css']
})
export class XorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  texto = '';
  chave = '';
  resultado = '';

  plainText: string;  
  encryptText: string;  
  encPassword: string;  
  decPassword: string;  
  conversionEncryptOutput: string;  
  conversionDecryptOutput: string;  

  cifrar() {
    if(this.plainText.length > 0 && this.encPassword.length > 0) {
      try {
        this.conversionEncryptOutput = methods.cifrar(this.plainText, this.encPassword);
      } catch (erro) {
        this.conversionEncryptOutput = erro;
      }
    }
  }

  descifrar() {
    if(this.encryptText.length > 0 && this.decPassword.length > 0) {
      try {
        this.conversionDecryptOutput = methods.cifrar(this.encryptText, this.decPassword);
      } catch (erro) {
        this.conversionDecryptOutput = erro;
      }
    }
  }

}
