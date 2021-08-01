//$('#container').siblings().eq(4).append($('<li>Classmates</li>'));

// var dateHour = moment("00:00:00", "h:mm:ss").format("dddd, MMMM Do YYYY, h:mm:ss a");
 var dateHour = moment("00:00:00", "h:mm:ss");

//$("#3a").text(dateHour);



for (let index = 0; index < 24; index++) {

dateHour = dateHour.add(index, "hours");
    

var timeSlot = `<div class="input-group">
<span class="input-group-addon">`+dateHour.format("hh:mm:ss a")+`</span>
<input id="inputTask" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
<span class="input-group-addon"><i class="fa fa-clipboard" aria-hidden="true"></i></span>
</div>`;

if(dateHour.isBefore("08:00:00", "h:mm:ss") )
{
    console.log("funciona");
    $("#inputTask").prop('disabled', true)



}

$('#container').append($(timeSlot));

}