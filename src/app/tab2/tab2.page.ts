import { Component } from '@angular/core';
import { TwitterSerivice } from './twtter.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  messagesv:  Array<string> = ["a","b"]; 
  constructor(private messageTitter:TwitterSerivice){
    
  }

  ngOnInit(){
   
    this.messageTitter.messages.subscribe(msg=>{
      
      this.messagesv.unshift(msg.nombre)
      
      
    })
  }

  sendMessage(){
    this.messageTitter.sendMsg('test message');
  }


}
