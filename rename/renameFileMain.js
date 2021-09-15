var fs =require('fs');
var oldFilepath ='./file/oldfile.txt';

var newFilepath = "./file/newfile.txt";

fs.rename(oldFilepath,newFilepath,renameCallback);

function renameCallback(error){
    if(error){
        console.log('Error in renaming file');
        console.log(error.message);

    }else{
        console.log("Renamed succesful");
    }
}