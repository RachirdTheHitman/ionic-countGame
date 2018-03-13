export class CountServices {
  private tapCount: number = 0;
  private pressCount: number = 0;



  getTapCount() {
    return this.tapCount;
  }

  getPressCount() {
    return this.pressCount;
  }

  resetAll() {
    this.tapCount = 0;
    this.pressCount = 0;
  }

  resetTap() {
    this.tapCount = 0;
  }

  resetPress() {
    this.pressCount = 0;
  }

  tapTriggered() {
    this.tapCount++;
  }

  pressTriggered() {
    this.pressCount++;
  }
}
