var sales = [[20, 94, 95, 58], [29, 29, 39, 43], [30, 49, 90, 56], [43, 90, 79, 95]];
var total = 0;
var i = 0;
var j = 0;

var sumOf = new Array();
var large = 0;
var small = 0;

for(i = 0; i <= 3; i++){
    sum = 0;

    for (j = 0; j <= 3; j++){
        document.write("<br /> sum = " + sum + "+" + sales[i][j]);
        sum = sum + sales[i][j];
    }

    total += sum;
    document.write( " <br /> sum: " + sum + "<br />");

    
        sumOf[i] = sum;
}


document.write( " <br /> total: " + total);


    
small = sumOf[0];

for(i = 1; i <= sales.length; i++){
    if(sumOf[i] < small){
        small = sumOf[i];
        sumOf[i] = sumOf[i + 1];
    }
    else{
        small = small;
        sumOf[i] = sumOf[i + 1];
    }
};

var large = sumOf[0];

for(i = 1; i <= sales.length; i++){
    if(sumOf[i] > large){
        large = sumOf[i];
        sumOf[i] = sumOf[i + 1];
    }
    else{
        large = large;
        sumOf[i] = sumOf[i + 1];
    }
};

//outputs the smallest number out of every total of each array row
document.write("<br /> Smallest: " + small);
//outputs the largest number out of every total of each array row
document.write("<br /> Largest: " + large);

// To find the Range of the array
var range = large - small;
//outputs the range of array
document.write("<br /> Range: " + range);

//To find the mean 
var sumOfData = total;
var noOfData = sumOf.length - 1;
var mean = sumOfData / noOfData;
// Output the result
document.write("<br /> Mean: " + mean);


// var arrLent= salesOut.length;
// var arrLent_two = salesOut[i].length;
// To find varience

var addUp = sumOf[0];

for(r = 1; r <= sales.length; r++){
    
    var ntr = sumOf[r] - mean;
    if(sumOf[i] > addUp){
    addUp = sumOf[i];
    }
    else{
        addUp = addUp;

    };
        // alert(ntr);
        // var numerator = Math.pow(ntr, 2);
        document.write("<br /> Varience: " + ntr);
        // alert(numerator);
    

    // if(sumOf[i] > large){
    //     large = sumOf[i];
    //     sumOf[i] = sumOf[i + 1];
    // }
    // else{
    //     large = large;
    //     sumOf[i] = sumOf[i + 1];
    // }

};
// test
// for (i = 0; i <= sales.length-1; i++) {
      
//     sum = 0;
//     sumOf[i] = sum;
//     for (j = 0; j <= sales[i].length-1; j++){
//         // var xi = sales[i][j];
//         var ntr = sumOf[i] - mean;
//         // alert(ntr);
//         var numerator = Math.pow(ntr, 2);
//         document.write("<br /> Varience: " + ntr);
//         // alert(numerator);
//     }

//     var denominator = noOfData - 1;
//     var varNum = numerator / denominator;
//     var varience = varNum;
//     var varienceNo = Math.floor(varience);
//     document.write("<br /> Varience: " + varienceNo);
// }