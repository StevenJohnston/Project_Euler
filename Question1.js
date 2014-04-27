function questionOne()
{ 
    $("#q1A").text("Answer: Calculating answer one moment...");
    var start = (new Date).getTime();
    var multipleOne = parseInt($("#q1N1").val());
    var multipleTwo = parseInt($("#q1N2").val()); 
    var maxInt = parseInt($("#q1N3").val()-1);
    var sum = sumUnderN(multipleOne)+sumUnderN(multipleTwo)-sumUnderN(multipleOne*multipleTwo);
    $("#q1A").text("Retrieved answer of " + sum + " in " + ((new Date).getTime() - start) + " milliseconds.");
    function sumUnderN(divisor)
    {
        return ((Math.floor(maxInt/divisor)/2)*(divisor+(maxInt-(maxInt%divisor))));
    }
}