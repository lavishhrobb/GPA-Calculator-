    var GPA = 0;
    var sum = 0;
function start(){ 
    var name = readLine ("whats your name?")
    var numOfClasses = readInt ("How many classes do you have?");

    for (var i = 0; i < numOfClasses; i++){
        var grade= readLine("What is your grade?");
        if  ((grade == "a") || (grade=="A")){
            sum += 4;
        } 
        if ((grade == "b") || (grade=="B")){
            sum += 3;
        } 
        if ((grade == "c") || (grade=="C")){
            sum += 2;
        } 
        if ((grade == "d") || (grade=="D")){
            sum += 1;
        } 
        if ((grade == "f") || (grade=="F")){
            sum += 0;
        }
    }
    GPA = sum / numOfClasses;
    println(name + " , your gpa is " + GPA);
}