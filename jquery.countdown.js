/*!
 * jQuery Countdown Plugin
 * version: 1.00 (25-APR-2012)
 * @author Gabe Antypas
 *
 * Examples and documentation at: http://gabeantypas.com/
 * Project repository: https://github.com/gabea/jquery.countdown
 * Licensed under the MIT and GPL license:
 *    http://www.opensource.org/licenses/mit-license.php 
 *
 */
;(function($) {
    $.fn.countdown = function(options) {
        options = $.extend({            
            duration: 1000,
            startNumber: 10,
            endNumber: 0,
            setType: 'text',
            beforeCountdown: function() {},
            duringCountdown: function() {},
            complete: function() {}
        }, options); 
              
        return this.each(function() {

            var self = this;                                         
            var n = options.startNumber;
            var startTime = (new Date()).getTime();
                         
            // Set the countdown number to the startnumber n on load. 
            $(self)[options.setType](n);
            
            // Call beforeCountdown callback passing it in start time.
            options.beforeCountdown(self, startTime);
                        
            var intervalID = window.setInterval(function() {
                // Update endTime first for better precision.
                var endTime = (new Date()).getTime();
                
                // Decrement the current number by 1.                                      
                n--;              
                
                // Set the number.
                $(self)[options.setType](n);
                
                // Call duringCountdown with each passthrough except. 
                options.duringCountdown(self, startTime, endTime); 
                
                // End execution of the interval if it is time.
                if (n === options.endNumber || options.endNumber >= options.startNumber) {
                    window.clearInterval(intervalID);
                    options.complete(self, startTime, endTime);
                }
            }, options.duration);   
        });
    };
})(jQuery);