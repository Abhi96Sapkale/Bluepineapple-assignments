//addition operation
function complexAddition(a,b,c,d) {

    var add = (a+c);
    var add1= (b+d);
    var complexAdd = "("+a +" + " + b+"i)" + " + " +"("+c + " + " +d+"i"+")" +"= "+add + " + "+add1+"i";
    return complexAdd;
}
  console.log("Addition"+'\n');
  console.log(complexAddition(5,6,7,8));
  console.log('\n');
  
//Substraction Operation
  
function complexSubstraction(a,b,c,d) {
  
    var sub = (a-c);
    var sub1= (b-d);
    var complexSub = "("+a +" + " + b+"i)" + " - " +"("+c + " + " +d+"i"+")" +"= "+sub +" " +sub1+"i";
    return complexSub;
}
  console.log("Substraction"+'\n');
  console.log(complexSubstraction(5,6,7,8));
  console.log('\n');
