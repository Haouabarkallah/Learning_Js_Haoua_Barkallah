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
        clearForm();
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
function showAddressBook(){
    //check if the key 'addbook' exists in localstorage or else create it
    // if it exists , load contents form the localstorage and loop > display it on the page
    if(localStorage['addbook'] === undefined){
        localStorage['addbook'] = "[]";

    }else{
        addressBook = JSON.parse(localStorage['addbook']);
        addBookDiv.innerHTML='';
        for(var n in addressBook){
            <div class="entry">
                <div class="name">
                    <p> Hala</p>
                </div>
                <div class="email">
                    <p>hala@gmail.com</p>
                </div>
                <div class="phone">
                    <p>699076543</p>
                </div>
                <div class="address">
                    <p>Manguier</p>
                </div>
                <div class="city">
                    <p>Yaoundé</p>
                </div>
                <div class="del">
                    <a href="#"> Delete</a>
                </div>
            </div>
        }
    }
}