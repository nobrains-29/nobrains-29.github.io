function ascending(){   
    var numbers=[];
    var size=prompt("How many numbers you want to enter");
    if(size>15){
        document.getElementById("content").innerHTML="Please enter total numbers upto 15";
        document.getElementById("content").style.display="inline-block";
        document.getElementById("content").style.width="100%";
        return false;
    }
    else{
        for( var i=0;i<size;i++){
        numbers[i]=prompt("Enter Number " + (i+1));
        }
        if(size>8){
            document.getElementById("content").style.width="70%";
        }
        else if(size>12){
            document.getElementById("content").style.width="85%";
        }
        else{
            document.getElementById("content").style.width="50%";
        }
        numbers.sort(function(a,b){ return a-b});
        document.getElementById("content").innerHTML=numbers;
        document.getElementById("content").style.display="inline-block";
    }
}
function descending(){
    var numbers=[];
    var size=prompt("How many numbers you want to enter");
    if(size>15){
        document.getElementById("content").innerHTML="Please enter total numbers upto 15";
        document.getElementById("content").style.display="inline-block";
        document.getElementById("content").style.width="100%";
    }
    else{
        for(var i=0;i<size;i++){
        numbers[i]=prompt("Enter Number " + (i+1));
        }
        numbers.sort(function(a,b){return b-a});
        document.getElementById("content").innerHTML=numbers;
        if(size>8){
            document.getElementById("content").style.width="70%";
        }
        else if(size>12){
            document.getElementById("content").style.width="85%";
        }
        else{
            document.getElementById("content").style.width="50%";
        }
        document.getElementById("content").style.display="inline-block";
    }
}