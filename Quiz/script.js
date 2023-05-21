let questions=[
    {
        "question":"Which is not a programming language ?",
        "a":"HTML",
        "b":"C",
        "c":"JAVA",
        "d":"JavaScript",
        "right":"a"
    },
    {
        "question":"Which is not a case sensitive language ?",
        "a":"HTML.",
        "b":"C.",
        "c":"JAVA.",
        "d":"JavaScript.",
        "right":"a"
    },
    {
        "question":"Which is not a programming language ?",
        "a":"HTML..",
        "b":"C..",
        "c":"JAVA..",
        "d":"JavaScript..",
        "right":"a"
    }
];
console.log(questions[1]);
let n=1;
let right=0,wrong=0,ans;
function submit(){
    let btn=document.getElementById("submit");
    btn.addEventListener("click",function(){
        let op1=document.getElementById("op_1");
        let op2=document.getElementById("op_2");
        let op3=document.getElementById("op_3");
        let op4=document.getElementById("op_4");
        if(op1.checked==true){
            ans="a";

        }
        else if(op2.checked==true){
            ans="b";
        }
        else if(op3.checked==true){
            ans="c";
        }
        else if(op4.checked==true){
            ans="d";
        }

        if(ans==questions[n-1].right){
            right++;
        }
        else{
            wrong++;
        }

        if(n==questions.length){
            alert(`Your Score is ${right}/${questions.length}`);

        }
        else{
        

        if(op1.checked==true || op2.checked==true || op3.checked==true || op4.checked==true){
            n++;
            



            op1.checked=false;
            op2.checked=false;
            op3.checked=false;
            op4.checked=false;
            loadQuestion();

        }
        else{
            alert("Please select one answer.");
        }
    }
    })
}
submit();
function loadQuestion(){
   let question=document.getElementById("question");
   let op1=document.getElementById("option_1");
   let op2=document.getElementById("option_2");
   let op3=document.getElementById("option_3");
   let op4=document.getElementById("option_4");
   question.innerText=`${n}) ${questions[n-1].question}`;
   op1.innerText=questions[n-1].a;
   op2.innerText=questions[n-1].b;
   op3.innerText=questions[n-1].c;
   op4.innerText=questions[n-1].d;
}
loadQuestion();