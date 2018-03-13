import {Component, EventEmitter, Output} from "@angular/core";
import {CountServices} from "../services/count.services";

@Component({
  selector: 'app-buttons',
  template: `
    <ion-row>
      <ion-col col-4>
        <button ion-button small block color="danger" (click)="onReset('all')">Reset ALl</button>
      </ion-col>
      <ion-col col-4>
        <button ion-button small block color="danger" (click)="onReset('tap')">Reset "Taps"</button>
      </ion-col>
      <ion-col col-4>
        <button ion-button small block color="danger" (click)="onReset('press')">Reset "Presses"</button>
      </ion-col>
    </ion-row>
    <ion-grid>
      <ion-row>
        <ion-col 
          col-6 
          style="background-color: lightgreen" 
          (tap)="onButtonTapped()" 
          text-center>
          Tap Here!
        </ion-col>
        <ion-col 
          col-6 
          style="background-color: lightgreen" 
          (press)="onButtonPressed()" 
          text-center>
          Press Here!
        </ion-col>
      </ion-row>
    </ion-grid>
  `
})
export class ButtonsComponents {

  @Output() didReset: EventEmitter<string> = new EventEmitter<string>();

  @Output() tapChange: EventEmitter<number> = new EventEmitter<number>();

  @Output() pressChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(private countServices: CountServices) {}

  // onResetAll() {
  //   this.countServices.resetAll();
  // }
  //
  // onResetTaps() {
  //   this.countServices.resetTap();
  // }
  // onResetPresses() {
  //   this.countServices.resetPress();
  // }

  onReset(type: string) {
    this.didReset.emit(type);
  }

  onButtonTapped() {
    this.countServices.tapTriggered();
    const newTapCount = this.countServices.getTapCount();
    this.tapChange.emit(newTapCount);
    console.log(this.countServices.getTapCount());
  }

  onButtonPressed() {
    this.countServices.pressTriggered();
    const newPressCount = this.countServices.getPressCount();
    this.pressChange.emit(newPressCount);
  }
}
