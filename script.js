function compute()
{
		// validate principal amount and compute the interest and show the result
    
 	if (checkdata()) {
    
    var principal = document.getElementById("principal").value;
    //alert("principal: " + principal )
    var rate = document.getElementById("rate").value;
    //alert("rate: " + rate)
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+"\<\/mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\<\/mark\>,\<br\>you will receive the interest in the amount of \<mark\>"+interest+"\<\/mark\>,\<br\>in the year \<mark\>"+year+"\<\/mark\>\<br\>";

	}

}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval+"%";
}

function checkdata()
{
		// validation for Principal Amount
    var principal = document.getElementById("principal");

    //Check if principal field is not zero nor negative
    if (principal.value == 0 || principal.value < 0) {
    	alert("Enter a positive value for Principal Amount");
    	principal.focus();
    	return false;
      
    } 
                 
    //If all is well return true.
    return true;

}
        