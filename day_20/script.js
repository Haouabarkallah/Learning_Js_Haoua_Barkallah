function updateForm(){
    //hide all inputs
    document.getElementById("id_inputs_circle").hidden =true;
    document.getElementById("id_inputs_triangle").hidden =true;
    document.getElementById("id_inputs_square").hidden =true;
    document.getElementById("id_inputs_rectangle").hidden =true;
    
    //get the selected shape and show its inputs
    let shape = document.getElementById("id_shapes").value;
    switch(shape) {
        case "circle":
            document.getElementById("id_inputs_circle").hidden =false;
            break;
        case "triangle":
            document.getElementById("id_inputs_triangle").hidden =false;
            break; 
               
    }
}