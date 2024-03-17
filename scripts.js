
$(document).ready(function () {
    var $timeline = $('.timeline');
    var $days = $('.days');
    var daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'];
    let rowIndex = 0;

    //Implementation to make the time labels to the left of the grid
    for (var hour = 7; hour <= 21; hour++) {
        for (var minute = 0; minute < 60; minute += 5) {
            let hourMarker = hour % 12 === 0 ? 12 : hour % 12;
            let minuteMarker = (minute < 10 ? '0' : '') + minute;
            let amPm = hour < 12 ? ' AM' : ' PM';
            let timelineLabel = hourMarker + ':' + minuteMarker + amPm;


            //this block is for adding the time label on the left of the calender....will only show 0 and 30 min labels
            //but still allocates visual space for the 5min increments
            if (minute === 0 || minute === 30) {
                $timeline.append($('<div>').addClass('time-marker time-marker-border').text(timelineLabel))
            } else if (hour === 21 && minute === 55) {
                $timeline.append($('<div>').addClass('time-marker').text(" ").css({"border-bottom": "1px dashed gray"}));
            } else {
                $timeline.append($('<div>').addClass('time-marker').text(" "));
            }

            //this block is for making the grid cells in the days element


            daysOfWeek.forEach((day, dayIndex) => {
                let cellId = rowIndex + day;
                $days.append($('<div>').addClass(cellId + ' timeSlot'));
                //console.log(cellId);
            });

            rowIndex++;

        }


    }
    var gridCoord = "25 / 37"; //grid coords for events are +1 over the for the div classes for the grid cells AKA 36Mon is actually the 37th grid line in the events grid etc....

    var $exampleEvent = $('.Mon .events');
    $exampleEvent.append($('<div>').addClass('event').text("Securities").css({

        "grid-row": gridCoord,
        "z-index": "1000"

    }));
    var $exampleEvent = $('.Mon .events');
    $exampleEvent.append($('<div>').addClass('event').text("Foreign Investments").css({

        "grid-row": "37 / 50",
        "z-index": "1000"

    }));

    var $exampleEvent = $('.Mon .events');
    $exampleEvent.append($('<div>').addClass('event').text("Bogle Mindset").css({

        "grid-row": "25 / 37",
        "z-index": "1000"

    }));
    var $exampleEvent = $('.Mon .events');
    $exampleEvent.append($('<div>').addClass('event').text("Bogle Mindset").css({

        "grid-row": "25 / 37",
        "z-index": "1000"
    }));


    var $exampleEvent = $('.Wed .events');
    $exampleEvent.append($('<div>').addClass('event').text("Securities").css({

        "grid-row": "26 / 38",
        "z-index": "1000"
    }));


    var $exampleEvent = $('.Thurs  .events');
    $exampleEvent.append($('<div>').addClass('event').text("Securities").css({

        "grid-row": "50 / 65",
        "z-index": "1000"
    }));


});