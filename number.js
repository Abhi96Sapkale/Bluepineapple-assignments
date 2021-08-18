const num = [12, 54, 69, 23, 75];
num.sort(function(a, b){return a-b});
console.log(num);
num.sort(function(a, b){return b-a});
console.log(num);