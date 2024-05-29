//yeh function promise kar rha hai movie download krke dega
//fullfill:moviedownload ho gai
//rejected:movie duw to reason download
function download(url){
    return new promise(function(resolve,reject){
        let ext=url.split('/').pop.split('.').pop();
        if(ext!=mp4){

            reject("abey sahi url to dede bsdk");
        }
        else{
            setTimeout(function(){
                resolve(url.split('/').popo());
            },3000);
        }
        
    })
}
//downloadmovie function ek promise return  krta hai,download
download('myurl.com/avengers.mp3')
.then(function(movie){
    console.log(movie);
}).catch(function(err){
    console.log(err);
})
