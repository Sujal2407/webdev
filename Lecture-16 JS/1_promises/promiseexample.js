function download(url){
    return new Promise(function(resolve,reject){
        console.log("dowloading starts from",url);
        setTimeout(function(){
            let exrtension=url.split('.').pop();
            if(['ewbp','png','jpg'].indexOf(exrtension)!=-1){
                let img=url.split('/').pop();
                resolve(img);
            }
            else{
                reject("abey url toh sahi dede");
            }
        },2000);
    })
}

function compress(file){
    return new Promise(function(resolve, reject) {
        console.log("compression start of",file);
        setTimeout(function(){
            let compressedimg=file.split('.')[0]+'.zip';
            console.log("compression completed",compressedimg);

            resolve(compressedimg);
        },2000);
    })
}
function upload(file){
    return new Promise(function(resolve,reject){
        console.log("uploading starts of",file);
        setTimeout(function(){
            let newlink='http://newsite.com/' + file;
            console.log("uploading completed",newlink);
            resolve(newlink);
        },2000);
    })
}

download('http://randomurl.com/avengers.jpg')
.then(function(img){
    console.log("downoad comeleted",img);
    return img;

})
.then(compress)
.then(upload)
.then(function(newlink){
    console.log("everyrhing done",newlink)
})
.catch(function(err){
    console.log(err);

})