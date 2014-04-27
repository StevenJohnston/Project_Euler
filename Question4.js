function questionFour()
{
    var start = (new Date).getTime();
    $("#q4A").text("Answer: Calculating answer one moment...");
    var q4N1 = parseInt($("#q4N1").val());
    var currentN="";
    for(i = 0 ; i < q4N1 ; i++)
    {
        currentN += "9";
    }
    currentN = parseInt(currentN);
    while(true)
    {
        currentN--;
        if(areFactors(parseInt(currentN +  currentN.toString().split("").reverse().join(""))))
        {
            break;
        }
    }
    $("#q4A").text("Retrieved answer of " + (currentN +  currentN.toString().split("").reverse().join("")) + " in " + ((new Date).getTime()-start) + " milliseconds.");
    function areFactors(palindrome)
    {
        for(i = parseInt(palindrome/(Math.pow(10,q4N1)-1));i < Math.sqrt(palindrome);i++)
    {
        if(palindrome%i == 0)
        {
            return true;
        }
    }
        return false;
    }
}