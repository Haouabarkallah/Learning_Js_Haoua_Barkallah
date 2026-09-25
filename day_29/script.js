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
})