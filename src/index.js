import { Subject, interval, take } from "rxjs";

// Create a subject to emit the counter values
const counterSubject = new Subject();

// Create an interval that emits a value every second
const counterObservable = interval(1000).pipe(
  take(10) // Emit 10 values (you can change this to your desired number of iterations)
);

// Subscribe to the counter observable
counterObservable.subscribe(
  (value) => {
    // Increment the value and emit it through the subject
    counterSubject.next(value + 1);
  },
  null,
  () => {
    // Complete the subject when the counter completes
    counterSubject.complete();
  }
);

// Subscribe to the counter subject to receive the emitted values
counterSubject.subscribe((value) => {
  document.getElementById("counterValue").textContent =
    "Counter value: " + value;
});
