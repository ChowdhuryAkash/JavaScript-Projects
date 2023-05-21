
var turn_value="X";
function turn(box_num){
   //document.getElementById("#b" + box_num).style.background="red";
   // console.log("yes")
   console.log(box_num);
   if(document.querySelector("#b"+ box_num).innerHTML==""){
        document.querySelector("#b"+ box_num).innerHTML="<h3>"+turn_value+"</h3>";
       
        
        if(turn_value=="X"){
            turn_value="O";
        }
        else{
            turn_value="X";
        }
        document.querySelector("#player").innerText=turn_value+" now it's your turn";
    }

    var val1=document.querySelector("#b1").innerText;
    var val2=document.querySelector("#b2").innerText;
    var val3=document.querySelector("#b3").innerText;
    var val4=document.querySelector("#b4").innerText;
    var val5=document.querySelector("#b5").innerText;
    var val6=document.querySelector("#b6").innerText;
    var val7=document.querySelector("#b7").innerText;
    var val8=document.querySelector("#b8").innerText;
    var val9=document.querySelector("#b9").innerText;
// // 1 2 3
//    4 5 6
//    7 8 9
//    1 4 7
//    2 5 8 
//    3 6 9
//    1 5 9
//    3 5 8

     if((val1==val2)&&(val2==val3)&&(val1!="")){
        document.querySelector("#player").innerText=val1 + "Wins";
        document.querySelector("#b1").style.background="cyan";
        document.querySelector("#b2").style.background="cyan";
        document.querySelector("#b3").style.background="cyan";

    }
    else if((val4==val5)&&(val5==val6)&&(val4!="")){
        document.querySelector("#player").innerText=val4 + "Wins";
        document.querySelector("#b4").style.background="cyan";
        document.querySelector("#b5").style.background="cyan";
        document.querySelector("#b6").style.background="cyan";

    }
    else if((val7==val8)&&(val8==val9)&&(val7!="")){
        document.querySelector("#player").innerText=val7 + "Wins";
        document.querySelector("#b7").style.background="cyan";
        document.querySelector("#b8").style.background="cyan";
        document.querySelector("#b9").style.background="cyan";
    }
    else if((val1==val4)&&(val4==val7)&&(val1!="")){
        document.querySelector("#player").innerText=val1 + "Wins";
        document.querySelector("#b1").style.background="cyan";
        document.querySelector("#b4").style.background="cyan";
        document.querySelector("#b7").style.background="cyan";
    }
    else if((val2==val5)&&(val5==val8)&&(val2!="")){
        document.querySelector("#player").innerText=val2 + "Wins";
        document.querySelector("#b2").style.background="cyan";
        document.querySelector("#b5").style.background="cyan";
        document.querySelector("#b8").style.background="cyan";
    }
    else if((val3==val6)&&(val6==val9)&&(val3!="")){
        document.querySelector("#player").innerText=val3+ "Wins";
        document.querySelector("#b3").style.background="cyan";
        document.querySelector("#b6").style.background="cyan";
        document.querySelector("#b9").style.background="cyan";
    }
    else if((val1==val5)&&(val5==val9)&&(val1!="")){
        document.querySelector("#player").innerText=val1+ "Wins";
        document.querySelector("#b1").style.background="cyan";
        document.querySelector("#b5").style.background="cyan";
        document.querySelector("#b9").style.background="cyan";
    }
    else if((val3==val5)&&(val5==val7)&&(val3!="")){
        document.querySelector("#player").innerText=val3 + "Wins";
        document.querySelector("#b3").style.background="cyan";
        document.querySelector("#b5").style.background="cyan";
        document.querySelector("#b7").style.background="cyan";
    }
     else if(val1!=""&&val2!=""&&val3!=""&&val4!=""&&val5!=""&&val6!=""&&val7!=""&&val8!=""&&val9!=""){
        document.querySelector("#player").innerText="Match is draw...! refresh to start new game";

    }



}