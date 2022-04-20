function sum(){
    var first = document.getElementById("main_one");
    var second = document.getElementById("main_two");
    var third = document.getElementById("main_three");
  
    var size =  first.value + second.value + third.value;
    
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
    // console.log(arr[0])
    switch (arr.length >= arr.length) {
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
};

function sm(){
  var first = document.getElementById("main_one");
  var second = document.getElementById("main_two");
  var third = document.getElementById("main_three");

  var size = first.value + second.value + third.value;
  // var size =[ 12, 3, 4, 2, 1];
  console.log(first.value);
  var small = size[0];

  for(i = 1; i <= size.length; i++){
      if(size[i] < small){
          small = size[i];
      }
  }

  document.display.text.value = small;
};

function lg(){
  var first = document.getElementById("main_one");
  var second = document.getElementById("main_two");
  var third = document.getElementById("main_three");

  var size = first.value + second.value + third.value;
  // var size =[ 12, 3, 4, 2, 1];

  var large = size[0];

  for(i = 0; i <= size.length; i++){
      if(size[i] > large){
          large = size[i];
      }
  }

  document.display.text.value = large;
};

function rg(){
    var first = document.getElementById("main_one");
    var second = document.getElementById("main_two");
    var third = document.getElementById("main_three");

    var size = first.value + second.value + third.value;
    // var size =[ 12, 3, 4, 2, 1];

    var small = size[0];

    for(i = 1; i <= size.length; i++){
        if(size[i] < small){
            small = size[i];
        } else{
            small = small;
        }
    }

    var large = size[0];

    for(i = 0; i <= size.length; i++){
        if(size[i] > large){
            large = size[i];
        }
        else{
            large = large;
        }
    }

    var range = large - small;
    document.display.text.value = range;

}

function mn(){
  var first = document.getElementById("main_one");
  var second = document.getElementById("main_two");
  var third = document.getElementById("main_three");

  var size = Number(first) + Number(second) + Number(third);

  var leng = size.length; 
  var mean = sumOf / leng;

  document.display.text.value = size;
};


function vr(){
  var first = document.getElementById("main_one");
  var second = document.getElementById("main_two");
  var third = document.getElementById("main_three");

  var size = first.value + second.value + third.value;

  // var size =new Array( parseInt(one), parseInt(two), parseInt(three),
  // parseInt(four), parseInt(five), parseInt(six));
  // var size = [ parseInt(one), parseInt(two), parseInt(three),
  //     parseInt(four), parseInt(five), parseInt(six)];
       
  var sumOf = first.value + second.value + third.value;

  var leng = size.length; 
  var mean = sumOf / leng;
  // for(i = 0; i <= size.length; i++){
  //     sum = 0;

      
  // var sum = sum + parseInt(one) + parseInt(two) + parseInt(three) 
  // + parseInt(four) + parseInt(five) + parseInt(six);

  // document.display.text.value = sum;
  // }

  var lin = sumOf[0];

  for(r = 0; r <= leng - 1; r++){
      // var kin = sumOf[r];
      
      var ntr = (lin - mean);
      var num = Math.pow(ntr, 2);
      document.display.text.value = ntr;

  };
  
};



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