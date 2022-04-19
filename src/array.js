var students = [
    ["Scott", "Maths", "English", "Chemistry"],
     ["Martins", "Maths", "English", "English"],
     ["Tricia", "Maths", "Chemistry", "English"],
     ["Ada", "Maths", "History", "English"],
     ["Kaima", "B. Science", "Maths", "English"],
     ["Linda", "Maths", "Technology", "English"],
     ["Manny", "Maths", "Chemistry", "English"]
    ];
    
    for ( i = 0; i < 7; i++){
        for ( j = 2; j <= 2; j++){
        document.write( "Name: " + students[i][0] + "<br >" + " Subjects: " + students[i][j] + " And " + students[i][1] + "<br />");
    }
    document.write("<br /> ");
};
document.write("<br /> ");

    
    
    /*for ( i = 0; i < 7; i++){
        for ( j = 2; j <= 2; j++){
        document.write( "This student " + students[i][0] + " does only  "+ students[i][j] + " And " + students[i][1] 
        + " out of three subjects: " + students[i][1] + ", <br />" + students[i][2] + " and " + students[i][3] );
    }
    document.write("<br /> ");
};
document.write("<br /> ");






/*for (var i = 0; i <= 2; i++){
    for (var j = 0; j <= 4; j++){
        document.write(students[i][j] + <br />);
    }
    document.write("<br />");
}
document.write("<br /> The End.");*/