let companies = ["Contemporary Casuals","Value Furnitures","Home Furnishings","Eastern Furniture","Impressions","Furniture Gallery","New Furniture","Dunkins Furniture","A Carpet","Flanigan Furniture","Ikards","Wild Bills","Janet's Collection","ABC Furniture Co."]


seeCustomers.onshow=function(){
  drpCompany.clear()   
  for (i = 0; i <= companies.length - 1; i++) 
    drpCompany.addItem(companies[i])
}




drpCompany.onclick=function(s){
  if (typeof(s) == "object"){  // means control clicked but no selection made yet
                              // Didn't clicked on a choice
    return                     // do nothing
  } else {
    drpCompany.value = s   // make dropdown show choice user made
    var query = "SELECT name, street, city, state FROM customer WHERE name = " + '"' + drpCompany.value + '"'  
 // alert(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mye34781&pass=Tennis382006&database=mye34781&query=" + query)

    if (req1.status == 200) { //transit worked.
        // req1.responseText is a JSON object with the results of the query in it.
        // Now to format it in a nicer format that you can work with - 
        // parse it from JSON object (JS Object Notaton) into an array that holds
        // each row as an array in it. 
        let results = JSON.parse(req1.responseText)
        console.log(results)
    if (results.length == 0)
        NSB.MsgBox("There are no companies in that state.")
    else {        

        var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i] + "\n"
        lblDescription.value = message
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
  }

}
