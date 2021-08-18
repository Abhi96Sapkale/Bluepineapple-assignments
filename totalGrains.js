function totalGrains(h,v)
  {
    
    let total=1;

    //block = 8*(h-1)+v;
   block =  h+(8*(v-1));
    for(let i=2; i<=block; i++) {

        total = total*2;

    }
    return total;

}
  console.log(totalGrains(8,8));