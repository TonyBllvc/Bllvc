var salesOut = [
    [29, 20, 28, 28, 92, 21],
     [ 40, 29, 21, 9, 18, 18],
     [ 28, 81, 21, 20, 92, 21],
     [ 24, 27, 10, 59, 28,29],
     [ 29, 27, 10, 80, 28,22]
    ];
var salesname=[
    "Scott Sales",
    "Martins Sales",
    "Tricia Sale",
    "Eva Mart", 
    "Madu Stores"
];
    
    var total = 0;
    var i = 0;
    var j = 0;
    var sum = 0;

    // var e280 =salesOut[i][j];
    var sumOf = new Array();
    var large = 0;
    var small = 0;
    //  var t = salesOut.length;
// alert("The value is " + e280 );
var arrLent= salesOut.length;
var arrLent_two = salesOut[i].length;
//alert("The value is " + arrLent);
    for (i = 0; i <= arrLent-1; i++) {
      
        sum = 0;

        document.write( "Name: " + salesname[i]+ "<br />");
        for (j = 0; j <= arrLent_two -1; j++){
            
             document.write("Day " + (j+1) + ": " + salesOut[i][j]);
            document.write("<br />");
        
        sum+=salesOut[i][j];
        
        };
// outputs the sum of every array table
        document.write("<br />  Sum : " + sum + "<br />");
        document.write("<br />")
        total += sum;
        /* accumulator for the sums of all the week-the individual arrays  */
        sumOf[i] = sum; // 

        // alert(sum);
        // document.write("<br />" + (total / average));
    };
    //outputs the cummulative total of every sum up 
document.write("<br /> Grand Total : " + total + "<br />");
document.write("The Array of the sums is ");
    for(r=0; r<=arrLent-1; r++){
        // Output the list 
        document.write(sumOf[r] + ",");
        
    };
    //document.write("<br />Cummulative Total: <br");
    //document.write("<br />" + total + "<br />");


 small = sumOf[0];

for(i = 1; i <= salesOut.length; i++){
    if(sumOf[i] < small){
        small = sumOf[i];
    //     sumOf[i] = sumOf[i + 1];
    // }
    // else{
    //     small = small;
    //     sumOf[i] = sumOf[i + 1];
    };
    // document.write("<br /> base 2: " + sumOf[i].toString(2));
};

 large = sumOf[0];

for(i = 1; i <= salesOut.length; i++){
    if(sumOf[i] > large){
        large = sumOf[i];
    }
};
//         sumOf[i] = sumOf[i + 1];
//     }
//     else{
//         large = large;
//         sumOf[i] = sumOf[i + 1];
//     }
// };


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
var noOfData = sumOf.length ;
// alert(noOfData);
var mean = sumOfData / noOfData;
// Output the result
document.write("<br /> Mean: " + mean);

// To find varience
// corrections to made (compare with screenshots).
for (r = 0; r <= arrLent - 1; r++) {
    
    // sum[r] = sum;
    // for (s = 0; s <= arrLent_two -1; s++){
        // var xi = salesOut[i][j];
        // alert(sumOf[r]);
        var ntr = (sumOf[r] - mean);
        // alert(ntr);
        var numerator = Math.pow(ntr, 2);
        // alert(numerator);
        // document.write("<br /> " + numerator );
        // alert(numerator);
    // }

    // rest
    var denominator = noOfData - 1;
    // alert(denominator);
    var varNum = numerator / denominator;
        // alert(varNum);
    var varience = varNum;
        // alert(varience);
    var varienceNo = Math.floor(varience);
        // alert(varienceNo);
    document.write("<br />" + (r + 1) + ": Varience: " + varienceNo);

    
// To find standard deviation
var sd = Math.floor(Math.sqrt(varience));
// alert(sd);
document.write("<br />" + (r + 1) + ".1: Standard Varience: " + sd );
}

// alert(denominator);

// To pass result into base 2
// var baseTwo = sumOf[i]    ;
for(i=0; i<=arrLent-1; i++){
    // Output the list 
    document.write("<br /> base 2: " + sumOf[i].toString(2));
    var log = sumOf[i];
    var log_ten = Math.log10(log);
    // alert(log);
    document.write("<br /> Log 10: " + log_ten);

};



// for( i = 1; i <= sumOf[r])





// To sort the sums
//var arrange = sumOf[r];
// var mf = 

// for(r=0; r<=arrLent.length; r++){  
//     for(s=0; s<=arrLent.length; s++){
//         if (arrLent[r] == arrLent[s])

//     };
// };








    
    // var arr = array.reduce(1559 + 1558 + 1044 + 467 + 493);
    // document.write("<br />" + total / average);

//    var construct = [{
//        id: 1, cost: 1559 
//   }, {
//       id: 2, cost: 1558
//   }, {
//       id: 2, cost: 1044
//   }, {
//       id: 2, cost: 467 
//   }, {
//       id: 2, cost: 493 
//   }];
//    var min = Math.min(...construct.map(item => item.cost));
//    var max = Math.max(...construct.map(item => item.cost));

    // var min = Math.min(sum);
    // var max = Math.max(sum);
   
    // document.write(min + "<br />");
    // document.write(max + "<br />");


    

//    for(i = 0; i < sum.length(); i++){
//        if(sum[i] > max){
//            max = sum[i];
//        };
//    };
//    document.write(sum);
//    function getMax(sum){
//        return Math.min.apply(null, sum.length - 1);
//    };

//    document.write(sum);

//    document.write(Math.min(sum) + "<br />");
//    document.write(Math.max.apply(null, sum));
//    var construst = salesOut => {
//        return salesOut.map(sub => {
//            var max = Math.max( sub);
//            return max;
//        });
//    };
//    document.write(construst(max)); 