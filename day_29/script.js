//btns
var quickAddBtn =document.getElementById("QuickAdd");
var AddBtn = document.getElementById("Add");
var cancelBtn = document.getElementById("Cancel");
var quickAddFormDiv = document.querySelector(".quickaddForm");

//form fields
var fullname = document.getElementById("fullname");
var phone = document.getElementById("phone");
var address = document.getElementById("address");
var city = document.getElementById("city");
var email = document.getElementById("email");

//address book display
var addBookDiv = document.querySelector(".addbook");

//create storage array
var addressBook =[]

// event listeners
quickAddBtn.addEventListener("click",function() {
    quickAddFormDiv.Style.display ="block";
});
cancelBtn.addEventListener("click",function(){
    quickAddFormDiv.Style.display ="none";
});
AddBtn.addEventListener("click", addToBook);

function jsonStructure(fullname,phone,address,city,email){
    this.fullname = fullname;
    this.phone =phone;
    this.address =address;
    this.city =city;
    this.email =email;
}

function addToBook(){
    var isNull =fullname.value!='' && phone.value!='' && address.value!='' && city.value!='' && email.value!='';
    if(isNull){
        //add the contents of the form to the array and localstorage
        var obj = new jsonStructure(fullname.value,phone.value,address.value,city.value,email.value);
        addressBook.push(obj);
        localStorage['addbook'] = JSON.stringify(addressBook);
        // Hide the form panel
        quickAddFormDiv.Style.display ="none";
        //clear the form
        //updating and displaying all the records in te addressbooks

    }
    // console.log(isNull);
}
function clearForm(){
    var frm = document.querySelectorAll(".formFields")
    for(var i in frm){
        frm[i].value ='';
    }
}