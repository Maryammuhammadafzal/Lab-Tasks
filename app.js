
// Here are some JavaScript Lab tasks

//Task-01
// alert('Hello World!');

//Task-02
//Sum of Matrix

var matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
var matrix2 = [[4,6,8],[12,0,2],[5,7,3]];

for(var i = 0; i < matrix1.length; i++){
    for(var j=0; j< matrix2.length; j++){
        document.write(matrix1[i][j] + matrix2[i][j] + ' ' );
        
    }
  document.write('<br>')

}


//Question-03
//Printing Stars

for(var i = 0; i < 5; i++){
for(var j = 0; j < 5; j++){
        document.write('maryam'[i]); 
        i-- 
    }
    document.write('<br>');
    
}



for(var i = 5; i > 0; i--){
    for(var j = 5; j > 0; j--){
            document.write('*');  
        }
        document.write('<br>');
    }