setInterval(() => {
    d= new Date()
    hour= d.getHours();
    minute= d.getMinutes();
    second= d.getSeconds();
    console.log(second)
    hrotation= 30*hour+ minute/2;
    mrotation = 6*minute;
    srotation = 6*second;

   document.getElementById('hour').style.transform= `rotate( ${hrotation}deg)`
   document.getElementById('minute').style.transform= `rotate( ${mrotation}deg)`
   document.getElementById('second').style.transform= `rotate( ${srotation}deg)`

    
}, 1000);