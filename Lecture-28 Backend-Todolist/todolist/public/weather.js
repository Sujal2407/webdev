function getdata(cityname){
    let apikey='64ba9fb697450c0b51c4eab0bb3fe05c';
    let geocodingapi=`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
    return new promise(async (resolve,reject)=>{
        try{
            let {data}=await axios.get(geocodingapi);
            data =data[0];
            const {lat,lon}=data;
            let res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
            console.log(res.data);
        }
        catch(err){
            alert(err);
        }
    })
}

getdata("uganda")
    .then((data)=>{
        console.log(data);
    })