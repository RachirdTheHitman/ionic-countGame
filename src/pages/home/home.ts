import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {CountServices} from "../../services/count.services";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  numTap: number;
  numPress: number;
  gameInfo: string;

  constructor(public navCtrl: NavController,
              private countServices: CountServices) {
  }

  ngOnInit() {
    this.numTap = this.countServices.getTapCount();
    this.numPress = this.countServices.getPressCount();
    this.gameInfo = 'Tap twice, press four times';
  }

  onTapChange(newTapNum: number) {
    this.numTap = newTapNum;
    if (this.numTap == 2 && this.numPress == 4) {
      this.gameInfo = 'You won!!!!'
    }
  }

  onPressChange(newPressNum: number) {
    this.numPress = newPressNum;
    if (this.numTap == 2 && this.numPress == 4) {
      this.gameInfo = 'You won!!!!'
    }
  }

  onDidReset(resetType: string) {
    switch (resetType) {
      case 'tap':
        this.numTap = 0;
        break;
      case 'press':
        this.numPress = 0;
        break;
      default:
        this.numTap = 0;
        this.numPress = 0;
    }
  }

}
