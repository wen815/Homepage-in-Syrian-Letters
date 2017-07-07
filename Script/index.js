
var s="ܫܢܥܡ ܣܫܥܫ ܫܫܥܣ ܣܬܡ܀ ܢܔܥܣ ܢܬܣܣ ܚܡܥܡ ܢܣ܀ܣ ܢܢܢ܀܀ ܗܡܣ ܢܗܬܔ ܣܣܔܡ ܔܬܬܚ ܣܡܢܡ ܥܥ܀ܣ ܣܣܬܬ ܣܡܣ܀",emp="",n=0;
function f(){
    var c=s.charAt(n);
    emp+=c;
    document.getElementById("h1").innerHTML=emp;
    n++;
    setTimeout("f()",10);
}
f();

function f1(){
        document.getElementById("s2").style.display="none";    
    document.getElementById("s3").style.display="block";    
}
function f1a(){
    document.getElementById("s2").style.display="block";    
        document.getElementById("s3").style.display="none";    
}