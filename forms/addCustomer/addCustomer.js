let companies1 = ["Contemporary Casuals","Value Furnitures","Home Furnishings","Eastern Furniture","Impressions","Furniture Gallery","New Furniture","Dunkins Furniture","A Carpet","Flanigan Furniture","Ikards","Wild Bills","Janet's Collection","ABC Furniture Co."]


lstCompanies.onclick=function(){
  if (typeof(choice) == "object")   // user clicked the control
    return
    
  // otherwise get user selection (second click) which is the index 
  // of the item chosen
  NSB.MsgBox(`The choice is ${companies1[choice]}`)
}




   
btnSubmit2.onclick=function(){
   let name = lstCompanies.value
   
    let query = "INSERT INTO customers name VALUES ('" + name + "')
// alert(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mye34781&pass=Tennis382006&database=mye34781&query=" + query)
    }

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
            var result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully added the customer!")
        } else
            NSB.MsgBox("There was a problem with adding the pet to the database.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  


}

let forms = ["See Customer", "Add Customer","Edit Customer","Delete Customer"]


hmbNav.onclick=function(){
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



