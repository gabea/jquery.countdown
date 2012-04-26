#[jQuery Countdown Plugin](https://github.com/gabea/jquery.countdown)

##Overview
The jQuery Countdown Plugin allows you to easily add a number that decrements within your HTML.

---

##Options

###duration
Time in milliseconds before the starting number is decremented. Default is 1000 milliseconds.

###startNumber
Your starting number that will be decremented. Default is 10. 

###endNumber
Your number to end on. Default is 0.

###setType
Determines whether to assign your number as text of the target element or as a value attribute.

options:

* 'text'
* 'val'

###beforeCountdown
Function called before the countdown begins. The target element, and startTime (in milliseconds) are passed in as options.

````javascript
beforeCountdown: function(element, startTime) { 
    // ...                  
}
```` 
###duringCountdown
Function called during the execution of the countdown. The target element, startTime (in milliseconds), and endTime (in milliseconds) are passed in as options.

````javascript
duringCountdown: function(element, startTime, endTime) { 
    // ...
}
````

###complete
Function called after the countdown as made it to the endNumber. The target element, startTime (in milliseconds), and endTime (in milliseconds) are passed in as options.

````javascript
complete: function(element, startTime, endTime) { 
    // ...
}
````

---

##Copyright and License
Licensed under the MIT license:

* http://www.opensource.org/licenses/mit-license.php

You may use the jQuery Countdown Plugin under the terms of the MIT License. 

You are free to use the jQuery Countdown Plugin in commercial projects as long as the copyright header is left intact.

