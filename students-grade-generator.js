// A > 79,
//B 60 to 79
//C 50 to 59
//D 40 to 49
// E less than 40

// promt the user to input studens
marks
var marks = 76;

marks = Number(marks);


//check if the number is valid btw 0 and 100
if(isNaN(marks) || marks < 0 || marks > 100){
    console.log("invalid input! please inter anumer between 0 and 100");
} else{
    var grade;
    if(marks > 79){
        grade = 'A';
    } else if (marks >= 60 && marks <=79 ){
        grade = 'B';
        
    } else if ( marks >= 50 && marks <=59){
        grade = 'C';

    } else if (marks >= 40 && marks <=49){
        grade = 'D';
    } else {
        grade ='E';
    }

    console.log("Mercy marks is:", grade);
     
}


