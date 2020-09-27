import { Component, OnInit } from '@angular/core';
import { Methods } from './methods';
import { Useful } from '../app.component'

const useful = new Useful();
const methods = new Methods();

@Component({
  selector: 'app-cc',
  templateUrl: './cc.component.html',
  styleUrls: ['./cc.component.css']
})
export class CcComponent implements OnInit {

  title = 'Cifra de César';

  texto = '';
  deslocamento = '';
  resultado = '';

  plainText: string;  
  encryptText: string;  
  encPassword: string;  
  decPassword: string;  
  conversionEncryptOutput: string;  
  conversionDecryptOutput: string;  

  constructor() { }

  ngOnInit(): void {
  }
  
  cifrar() {
    if(this.plainText.length > 0 && this.encPassword.length > 0) {
      if (useful.isPositiveInteger(this.encPassword)) {
        try {
          this.conversionEncryptOutput = methods.cifrar(this.plainText, parseInt(this.encPassword));
        
        } catch (erro) {
          this.conversionEncryptOutput = erro;
        
        }
      } else {
        this.conversionEncryptOutput = 'O deslocamento deve ser um número inteiro positivo.';
      
      }
    }
  }

  decifrar() {
    if(this.encryptText.length > 0 && this.decPassword.length > 0) {
      if (useful.isPositiveInteger(this.decPassword)) {
        try {
          this.conversionDecryptOutput = methods.decifrar(this.encryptText, parseInt(this.decPassword));
          
        } catch (erro) {
          this.conversionDecryptOutput = erro;
          
        }
      } else {
        this.conversionDecryptOutput = 'O deslocamento deve ser um número inteiro positivo.';
        
      }
    }
  }

}
