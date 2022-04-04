// Movement Functionality
var position = 0
var counter = 0
const multiStepForm = document.querySelector("[data-multi-step]")
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]

let currentStep = formSteps.findIndex(step => {
    return step.classList.contains("active")
})

//Side-Menu Functionality
$(".side-content").click(function() {

    // Select all list items
    var listItems = $(".card");

    // Remove 'active' tag for all list items
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
    }

    // Add 'active' tag for currently selected item
    position = parseInt($(this).parent().index())
    listItems[position].classList.add("active");

    currentStep = position

});

//Next and Previous Buttons Functionality
if(currentStep < 0){
    currentStep = 0
    formSteps[currentStep].classList.add("active")
    showCurrentStep()
}


multiStepForm.addEventListener("click", e=> {
    //Next Button
    if(e.target.matches("[data-next]")){
            if(position > 0){
                if(counter > 0)
                    currentStep ++
                else{
                    currentStep = position;
                    currentStep++
                    counter++
                }
            }else{
                currentStep ++
            }
    }else if(e.target.matches("[data-previous]")){//Previous Button
        if(position > 0){
            if(counter > 0)
                currentStep--
            else{
                currentStep = position
                currentStep --
                counter++
            }
        }else{
            currentStep --;
        }
        showCurrentStep()
    }
    else{
        return
    }
    showCurrentStep()
})
//Toggle Page Using the Active class
function showCurrentStep(){
    formSteps.forEach((step, index) =>{
        step.classList.toggle("active", index === currentStep)
    })
}
//Form Validation
// function formValidate(){
//     var num = currentStep+1;
//     var val = num.toString()
//     const inputs = $("#div-"+ val).find("input[required]")
//     for(i = 0; i < inputs.length; i++){
//         if(!$.trim(inputs[i].value).length){
//             $(".form-div").addClass("formError")
//             console.log(inputs[i])
//             return false;
//         }
//     }
// }

// function validateSideMenu(){
//     const inputs = $("#one").find("input[required]")
    
//     for(i = 0; i < inputs.length; i++){
//         if(!$.trim(inputs[i].value).length && i < 16){
//             $(".form-div").addClass("formError")
//             console.log(inputs[i])
//             return false
//         }
//     }
// }