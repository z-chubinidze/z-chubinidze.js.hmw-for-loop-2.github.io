//for ციკის დახმარებით გამოთვალეტ 1 დან 300-ის ჩათვლის რიცხვთა ჯამი

function sumNUmbers(){
    var sum = 0;
    var result = document.getElementById("numbers")
for(var i=0; i<=300; i++){
    sum = sum + i;
}
result.innerHTML = ("The sum of the numbers in the array is: " + sum)
result.style.fontSize = "20px"
}
