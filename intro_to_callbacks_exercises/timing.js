class Clock {
  constructor() {
    // 1. Create a Date object.
    let ourDate = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = ourDate.getHours();
    this.minutes = ourDate.getMinutes();
    this.seconds = ourDate.getSeconds();
    // 3. Call printTime.
    this.printTime();
    
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.

    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.update_minutes();
    }
    this.printTime(); // prints the time of the updated clock object
  }
  
  update_minutes() {
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this.update_hour();
    }
  }
  
  update_hour() {
    this.hour += 1;
    if (this.hour === 13) {
      this.hour = 1;
    }
  }
}

const clock = new Clock();