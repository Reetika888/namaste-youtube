Debouncing:

typing slow => iphone(difference between two keystrokes is high) approx 200ms => suggestions(to give better user experience)
typing fast => iphone(difference between two keystrokes is low) approx 30ms

Performance:
 - iphone pro max = 14 letters * 1000 = 140000
 - with debouncing = 3 API Calls * 1000 = 3000 

 In Flipart approx debouncing with 200ms is present.
 In Youtube approx debouncing with 30ms is present.

 Debouncing with 200ms
 - If difference between 2 key strokes is less than 200ms, I should not call API(Decline API Call).
 - If difference between 2 ket strokes is greater than 200ms, Make an API Call.


