function downloadmovie(url,cb){
    let ext=url.split('/').pop().split('.').pop();
    if(ext!=mp4){
        throw new error("abbey link toh sahi hai h dede");
    }
    else{
        settimeout(function(){
            cb(url.split('/').pop());
        },2000)
    }
}
downloadmovie('myurl.com/avengers.mp4',function(movie){
    console.log(movie);
    compressmovie()
})