
deleteUpdateCustomer.onshow=function(){
// get the data to populate the dropdown with names from database
    let query = "SELECT name FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mye34781&pass=Tennis382006&database=mye34781&query=" + query)

    if (req1.status == 200) { //transit worked.
            let results = JSON.parse(req1.responseText)
            // names now in results array - load names into the dropdown
             drpCompany1.clear()
            for (i = 0; i <= results.length - 1; i++)
                drpCompany1.addItem(results[i])
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
}

btnSubmit1.onclick=function(){
    if (drpCompany1==0){
    let newName = inptNewName.value
    let oldName = drpCompany1.value
    let query = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldName + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mye34781&pass=Tennis382006&database=mye34781&query=" + query)
    }
    
  else if (drpCompany1==1){
    
    let NameToDel = drpCompany1.value
    let query = "DELETE customer where name =" + '"' + NameToDel + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mye34781&pass=Tennis382006&database=mye34781&query=" + query)
    }
    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the update succeeded
            let result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully changed the name!")
        } else
            NSB.MsgBox("There was a problem changing the name.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  
}

hmbNav2.onclick=function(){
  hmbMenu.clear()

for(i=0;i<forms.length;i++){
    
    hmbMenu.addItem(forms[i])
  }

  if (typeof(s) == "object") 
    return
    
switch(s) {
case "See Customer":
    ChangeForm(seeCustomers)
    break
case "Add Customer":
    ChangeForm(addCustomer)
    break
case "Edit Customer":
    ChangeForm(deleteUpdateCustomer)
    break
    
case "Delete Customer":
    ChangeForm(deleteUpdateCustomer)
    break
    
  
}
}
