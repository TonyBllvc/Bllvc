// item(
//     document.getElementById("main_one"), 
//     document.getElementById("main_two"),
//     document.getElementById("main_three"),
//     document.getElementById("main_four"),
//     document.getElementById("main_five") 
// );

// function sum(a, b, c, d, e){
    
// };

    
function sum(){
    var one = document.getElementById("main_one").value;
    var two = document.getElementById("main_two").value;
    var three = document.getElementById("main_three").value;
    // var four = document.getElementById("main_four").value;
    // var five = document.getElementById("main_five").value;
    // var six = document.getElementById("main_six").value;

    var number = parseInt(one) + parseInt(two) + parseInt(three);
    
    // document.getElementById("tap") = document.display.text.value;
    // document.getElementById("tap") = number;
    document.display.text.value =  number;
    
    // document.addEventListener()  
};

function sm(){
    var one = document.getElementById("main_one").value;
    var two = document.getElementById("main_two").value;
    var three = document.getElementById("main_three").value;
    var four = document.getElementById("main_four").value;
    var five = document.getElementById("main_five").value;
    var six = document.getElementById("main_six").value;

    
    // var size =[ parseInt(one), parseInt(two), parseInt(three),
    //     parseInt(four), parseInt(five), parseInt(six)];
    
    // var sumOf = parseInt(one) + parseInt(two) + parseInt(three) 
    // + parseInt(four) + parseInt(five) + parseInt(six);

    var size = one + two + three + four + five + six;
    // var size =[ 12, 3, 4, 2, 1];

    var small = size[0];

    for(i = 1; i <= size.length; i++){
        if(size[i] < small){
            small = size[i];
        } else{
            small = small;
        }
    }

    document.display.text.value += parseFloat(small);
};

function lg(){
    var one = document.getElementById("main_one").value;
    var two = document.getElementById("main_two").value;
    var three = document.getElementById("main_three").value;
    var four = document.getElementById("main_four").value;
    var five = document.getElementById("main_five").value;
    var six = document.getElementById("main_six").value;

    var size = one + two + three + four + five + six;
    // var size =[ 12, 3, 4, 2, 1];

    var large = size[0];

    for(i = 0; i <= size.length; i++){
        if(size[i] > large){
            large = size[i];
        }
        else{
            large = large;
        }
    }

    document.display.text.value = parseFloat(large);
};

function rg(){
    var one = document.getElementById("main_one").value;
    var two = document.getElementById("main_two").value;
    var three = document.getElementById("main_three").value;
    var four = document.getElementById("main_four").value;
    var five = document.getElementById("main_five").value;
    var six = document.getElementById("main_six").value;

    var size = one + two + three + four + five + six;
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
    var one = document.getElementById("main_one").value;
    var two = document.getElementById("main_two").value;
    var three = document.getElementById("main_three").value;
    var four = document.getElementById("main_four").value;
    var five = document.getElementById("main_five").value;
    var six = document.getElementById("main_six").value;

    var size =[ parseInt(one), parseInt(two), parseInt(three)];
         
    var sumOf = parseInt(one) + parseInt(two) + parseInt(three);

    var leng = size.length; 
    var mean = sumOf / leng;

    document.display.text.value = mean;
};

function vr(){
    
    var one = document.getElementById("main_one").value;
    var two = document.getElementById("main_two").value;
    var three = document.getElementById("main_three").value;
    var four = document.getElementById("main_four").value;
    var five = document.getElementById("main_five").value;
    var six = document.getElementById("main_six").value;

    // var size =new Array( parseInt(one), parseInt(two), parseInt(three),
    // parseInt(four), parseInt(five), parseInt(six));
    var size = [ parseInt(one), parseInt(two), parseInt(three),
        parseInt(four), parseInt(five), parseInt(six)];
         
    var sumOf = parseInt(one) + parseInt(two) + parseInt(three) 
    + parseInt(four) + parseInt(five) + parseInt(six);

    var leng = size.length; 
    var mean = parseInt(sumOf) / parseInt(leng);
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



// function sm(){
//     var one = document.getElementById("main_one").value;
//     var two = document.getElementById("main_two").value;
//     var three = document.getElementById("main_three").value;
//     var four = document.getElementById("main_four").value;
//     var five = document.getElementById("main_five").value;
//     var six = document.getElementById("main_six").value;

//     var number =[ parseInt(one), parseInt(two), parseInt(three),
//          parseInt(four), parseInt(five), parseInt(six)];

//     numb[i] = number;
    

//     var small = numb[0];

//     for(i = 1; i <= number.length; i++){
//         if(numb[i] > small){
//             small = numb[i];
//             numb[i] = numb[i + 1];
//         }
//         else{
//             small = small;
//             numb[i] = numb[i + 1];
    
//         }

//         document.display.text.value = small;
//     };
// };
    
  


/*
var first = document.getElementById("main_one");
var second = document.getElementById("main_two");
var third = document.getElementById("main_three");
var fourth = document.getElementById("main_four");
var fifth = document.getElementById("main_five");
var sixth = document.getElementById("main_six");

var item = [
    [first.value],
    [second.value],
    [third.value],
    [fourth.value],
    [fifth.value],
    [sixth.value]
];

var total = 0;
var i = 0;
var j = 0;
var sum = 0;
var sumOf = new Array();
var large = 0;
var small = 0; 
var s = item.length;
var t = item[i].length;
// var lineout = 

for(i = 0; i <= s - 1; i++){
    sum = 0;

    for(j = 0; j <= t - 1; j++ ){
        sum += item[i][j];
    };

    total += sum;
    /* accumulator for the sums of all the arrays  *//*
    sumOf[i] = sum;
};

function sum(){
    for(r=0; r<=s-1;r++){
        var sumUp = sumOf[r];
    }
}

 function tap(){
     document.display.text.value += item;

};

function tap(){
    document.display.text.value += sumUp;
}
*/