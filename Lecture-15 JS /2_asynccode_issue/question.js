function download(){
    console.log("download statrts");
    setTimeout(function(){
        console.log("download completed");
        // cb(upload);
    },2000)
}//2 sec, asychronous

function compress(){
    console.log("compression starts");
    setTimeout(function(){
        console.log("compression ends");
    },2000);
}// 2 sec,asychronous

function upload(){
    console.log("upload starts");
    setTimeout(function() {
        console.log("upload ends")
    }, 2000);
}//2 sec ,asychronous
download(compress);
//download->compress->upload 