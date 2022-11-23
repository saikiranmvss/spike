import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { __values } from 'tslib';
import { trigger, animate, transition, style } from '@angular/animations';
import { HttpClient, HttpHeaderResponse , HttpHeaders } from '@angular/common/http';

export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [

        // route 'enter' transition
        transition(':enter', [

            // css styles at start of transition
            style({ opacity: 0 }),

            // animation and styles at end of transition
            animate('.3s', style({ opacity: 1 }))
        ]),
    ]);


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  
  msgData: any [] = [];
  msgData2:any [] = [];
  constructor ( private http:HttpClient ){}

  onLogin(){    
    const headers= new HttpHeaders({'myheader':'procadmey'})
    this.http.post('http://192.168.64.126:9999/message',{msg:'success'},{headers:headers})
    .subscribe(Response=>{   
      console.log(Response);  
      for (const address of Object.values(Response)){
         this.msgData.push(address);
      }    }
      // sendData(onj);
  // var prods= JSON.stringify(onj);  
  
// console.log(key);
  
    )
  }


  ngOnInit(): void {

  // sendData(datas){
  //   var values=datas.msg;
  // } 
  }

}



