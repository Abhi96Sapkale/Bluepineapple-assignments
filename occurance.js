// var str = "to be or not be that is the question";
var str1 = "The Agni missile is a family of medium to intercontinental range ballistic missiles developed by India named after one of the five elements of nature Agni missiles are long range nuclear weapons capable surface to surface ballistic missile";

word(str1);
letter(str1);

function word(str){
    var arr = str.split('');
    var uniqueArr=arr.filter(function(currentItem,i,allItems){
        return (i == allItems.indexOf(currentItem));
    });
    let length = str.length;

    for(let j=0;j<uniqueArr.length;j++){
        var ctr=0;
        for(let i=0;i<length;i++){
            if(uniqueArr[j].toLowerCase() == str[i].toLowerCase())
                ctr++;
        }
        console.log("The occurance of "+uniqueArr[j]+" is "+ctr+" times");
    }

}

function letter(str){
    var arr1 = str.split(' ');
    var uniArr = arr1.filter(function(currentItem,i,allItems){
        return (i == allItems.indexOf(currentItem));
    }); 

    for(let i=0;i<uniArr.length;i++){
        var ctr=0;
        for(let j=0;j<arr1.length;j++){
            if(uniArr[i].toLowerCase() == arr1[j].toLowerCase()){
                ctr++;
            }
            
        }
        console.log('The occurance of word   '+arr1[i]+'   is   '+ctr+' times');
    }
}    

        
