import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  criptografia: string = 'boasVindas';

  constructor() { }
  
  ngOnInit(): void {
    console.log(this.criptografia);
  }

  cifraCesar(){
    this.criptografia = 'cc'
  }

  aes(){
    this.criptografia = 'aes'
  }
  des(){
    console.log('des');
    this.criptografia = 'des'
  }
  sdes(){
    this.criptografia = 'sdes'
  }
  xor(){
    this.criptografia = 'xor'
  }

  teste(){
    console.log('teste');
    this.criptografia = 'boasVindas'
    console.log(this.criptografia);
  }

}
