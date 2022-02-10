import { Component, Input, OnInit } from '@angular/core';
import { Frase } from  'src/app/interfaces/Frase'

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent implements OnInit {

  currentSentence:number;

  @Input() data:Frase[] = [];
  constructor() { 
    this.currentSentence = 0;
  }

  prev(){
    (this.currentSentence > 0)?this.currentSentence--:this.currentSentence;
  }

  next(){
    (this.currentSentence < (this.data.length-1))?this.currentSentence++:this.currentSentence;
  }
  setBackground(){
    
  }




  ngOnInit(): void {
  }

}
