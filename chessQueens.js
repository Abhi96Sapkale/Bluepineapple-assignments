var row1=3, col1=7, row2=6, col2=4, ctr=0;

switch(1){
    case 1://Vertical upward
        for(let i=row1;i<=8;i++){
            let j=col1;
            if(i==row2 && j==col2){
                console.log("1");
                console.log("Queens can attack each other");
                ctr++;
                break;
            }
        }
    

    case 2://Vertical downword
        for(let i=row1;i>=1;i--){
            let j=col1;
            if(i==row2 && j==col2){
                console.log("2");
                console.log("Queens can attack each other");
                ctr++;
                break;
            }            
        }
        
    
    case 3://Horizonat right
        for(let j=col1;j<=8;j++){
            let i=row1;
            if(i==row2 && j==col2){
                console.log("3");
                console.log("Queens can attack each other");
                ctr++;
                break;
            } 
        }
        
        
    case 4://Horizontal left
        for(let j=col1;j>=1;j--){
            let i=row1;
            if(i==row2 && j==col2){
                console.log("4");
                console.log("Queens can attack each other");
                ctr++;
                break;
            } 
        }
        
        
    case 5:
        for(let i=row1,j=col1;i<=8 && j<=8;i++,j++){
            if(i==row2 && j==col2){
                console.log("5");
                console.log("Queens can attack each other");
                ctr++;
                break;
            } 
        }
        

      
    case 6:
        for(let i=row1,j=col1;i<=8 && j>=1;i++,j--){
            if(i==row2 && j==col2){
                console.log("6");
                console.log("Queens can attack each other");
                ctr++;
                break;
            } 
        }  
        
    case 7:
        for(let i=row1,j=col1;i>=1 && j<=8;i--,j++){
            if(i==row2 && j==col2){
                console.log("7");
                console.log("Queens can attack each other");
                ctr++;
                break;
            } 
        }
        
    case 8:
        for(let i=row1,j=col1;i>=1 && j>=1;i--,j--){
            if(i==row2 && j==col2){
                console.log("8");
                console.log("Queens can attack each other");
                ctr++;
                break;
            } 
        }
        
        
    case 9:
        if(ctr == 0){
            console.log("Queens cannot attack each other");
            break;
        }
}