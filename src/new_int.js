function sum(){
    var one = document.getElementById("main_one").value;
    var two = document.getElementById("main_two").value;
    var three = document.getElementById("main_three").value;

    var number = parseInt(one) + parseInt(two) + parseInt(three) 
    + parseInt(four) + parseInt(five) + parseInt(six);
    
    // document.getElementById("tap") = document.display.text.value;
    // document.getElementById("tap") = number;

    document.display.text.value =  number;
    
    // document.addEventListener()  
};

function addTo(){   
 
    var one = document.getElementById("main").value;
    var first = document.getElementById("main_one");
    var second = document.getElementById("main_two");
    var third = document.getElementById("main_three");
    // if(!first.value){
    //     first.value = one;
    //     document.getElementById("main").value = "";
    // }else if(first.value && (!second.value)){
    //     second.value = one;
    //     document.getElementById("main").value = "";
    // }else if(first.value && second.value && (!third.value)){
    //     third.value = one;
    //     document.getElementById("main").value = "";   
    // }
    var arr=[first.value, second.value, third.value];
    console.log(arr[0])
    switch (arr.length>=3) {
        case !arr[0]:
            first.value = one;
            document.getElementById("main").value = "";
          break;
        case !arr[1]:
            second.value = one;
            document.getElementById("main").value = "";
          break;
        case !arr[2]:
            third.value = one;
            document.getElementById("main").value = "";   
          break;
        
      }
}

// function addTo(){
//     var one = document.getElementById("main").value;

//     document.getElementById("main_one").value = one;
//     document.getElementById("main_two").value = one;
//     document.getElementById("main_three").value = one;

    

// }


// function addTo(){
//     var one = document.getElementById("main").value;
//     var first = document.getElementById("main_one");
//     var second = document.getElementById("main_two");
//     var third = document.getElementById("main_three");

//     let inputs = [first, second, third];
//     document.getElementById("main").value = "";
   
//     for(i = 0; i <= inputs.length - 1; i++){
//         inputs[1].value = one;

//     // switch (one){
//     //     case 1:
//     //     inputs[0].value = one;
//     //     one.value = " ";
//     //      break;
//     //     case 2:
//     //     inputs[1].value += one;
//     //     one.value = " ";
//     //      break;
//     //     case 3:
//     //     inputs[2].value += one;
//     //     one.value = " ";
//     //      break;

//     //     // if (one = inputs[0]) {
//     //     //     first.value += one;
//     //     //     document.getElementById("main").value = " ";
//     //     // }else if(inputs[0] != " "){
//     //     //     second.value += one;
//     //     //     document.getElementById("main").value = " ";
//     //     //  }//else(inputs[0] != " "  && inputs[1] != " "){
//     //     //     third.value += one;
//     //     //     document.getElementById("main").value = " ";
//     //     // }
//     }
// };

// function addTo(){
//     var one = document.getElementById("main").value;
//     var first = document.getElementById("main_one");
//     var second = document.getElementById("main_two");
//     var third = document.getElementById("main_three");
//     //document.getElementById("textDisplay").innerHTML = one;
    
//     // var disp=document.getElementById("textDisplay");
//     // disp.innerHTML += one;
//     // document.getElementById("textDisplay").style.display = "block";
//     first.value += one;
//     document.getElementById("main").value = "";
//     // one = parseInt(one);
//     // switch (one){
//     //     case 1:
//     //     document.getElementById("main_one").value = one;
//     //      break;
//     //     case 2:
//     //     document.getElementById("main_two").value += one;
//     //      break;
//     //     case 3:
//     //     document.getElementById("main_three").value += one;
//     //      break;
//     //      default:
//     //      fourth.innerHTML += null;
        
//     // }
// };