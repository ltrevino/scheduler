
//Set initial hour and other variables
var dateHour = moment("00:00:00", "h:mm:ss");
var input;

//Set present day and display in document
var currentDayEl = $('#currentDay');
var today = moment().format("dddd, MMMM Do YYYY");
currentDayEl.text(today);

//Iterates through hours
for (let index = 0; index < 24; index++) {

    //Sets te template adding id's to specific hours
    var timeSlot = `<div class="input-group">
                    <span class="input-group-addon">`+dateHour.format("hh:mm:ss a")+`</span>
                    <input id="inputTask`+index+`" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                    <span class="input-group-addon"><a href=""><i id="saveTask`+index+`" class="fa fa-clipboard" aria-hidden="true"></i></a></span>
                    </div>`;

    $('#container').append($(timeSlot));

    

    //Load saved tasks
    var savedTask = localStorage.getItem("saveTask"+index);
    var taskEl = $('#inputTask'+index);

    //Validates if there is a task schedule to style the slots
    if(savedTask){
        taskEl.val(savedTask);
        taskEl.attr('style','background-color: #F85959;');
    }
    else{
        taskEl.attr('style','background-color: #33FF7A;');

    }

    //Disables non working hours
    if(dateHour < moment("08:00:00", "h:mm:ss") || dateHour > moment("17:00:00", "h:mm:ss") )
    {
    
        inputBlocked = "#inputTask"+index;
        $(inputBlocked).prop('disabled', true)

        saveBlocked = "#saveTask"+index;
        $(saveBlocked).parent().attr("style","pointer-events: none");

        taskEl.attr('style','background-color: #7F7F7F;');

    }

    //Change index
    dateHour = dateHour.add(1, "hours");

}


//Save to localStorage

var saveEl = $('i');

saveEl.on('click', function () {
    event.preventDefault();

    //Find the input traversing DOM
    var selector = $("#"+event.target.id);
    var taskEl = $(selector).closest('span').siblings('input');

    //Saves in localStorage
    localStorage.setItem(event.target.id, taskEl.val());
    
    //Validates if content was saved to style the slots
    if(taskEl.val()){
        taskEl.attr('style','background-color: #F85959;');
    }
    else{
        taskEl.attr('style','background-color: #33FF7A;');
    }

});

