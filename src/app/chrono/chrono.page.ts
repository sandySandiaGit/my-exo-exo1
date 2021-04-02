import { Component, OnInit } from '@angular/core';
import { TimeInterval} from 'rxjs';
//import { interval, timer } from 'rxjs';


@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.page.html',
  styleUrls: ['./chrono.page.scss'],
})

export class ChronoPage implements OnInit {

public min:number = 0;
public sec:number = 0;
public centiSec:number = 0;
public firstSetInt;
public secondSetInt;
public startIsEnable:boolean = true;
public stopIsEnable:boolean = false;
public resetIsEnable:boolean = false;

/*centiSec = (this.centiSec<10) ? `0${centiSec}` : centiSec;ne fx pas car conflit str/number!!*/

  constructor() { }

  ngOnInit() {}

  reset(){
    //const test = typeof this.firstSetInt;
    //console.log(test);//number??Timeout?
    clearInterval(this.firstSetInt);
    clearInterval(this.secondSetInt);
   
    this.centiSec = 0;
    this.sec = 0;
    this.min = 0;

    this.startIsEnable = true;
    this.stopIsEnable = false;
    this.resetIsEnable = false;  
  }

  stop(){
    clearInterval(this.firstSetInt);
    clearInterval(this.secondSetInt);
   
    this.startIsEnable = true;
    this.stopIsEnable = false;
    this.resetIsEnable = true;

  }

  start(){
    this.startIsEnable = false;
    this.stopIsEnable = true;
    this.resetIsEnable = true;

    this.firstSetInt = setInterval(() => {   
       this.chroFn();    
    },10);

    this.secondSetInt = setInterval(() => {      
      this.chroFn();
    },1000);

  }

  chroFn(){

        this.centiSec = this.centiSec + 1;

        if(this.centiSec == 99){
          this.sec = this.sec + 1;
          this.centiSec=0;//QD ON ARRIVE A LA sec = 100 CENTIsec on remet les centiSec à 0
        }
       
        if(this.sec == 59){
          this.min = this.min + 1;
          this.sec = 0;//QD ON ARRIVE A LA MIN = 60 sec on remet les sec à 0
        }

        if(this.min == 59){
          this.min = 0;//QD ON ARRIVE A L HEURE = 60 min on remet les MIN à 0
        }
    }
}


