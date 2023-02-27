setInterval((clock) => {
    let d= new Date();
    let hh=d.getHours();
    let mm=d.getMinutes();
    let ss=d.getSeconds();
    let hrotate= hh*30 +mm/2;
    let mrotate= mm*6;
    let srotate= ss*6;  
 hour.style.transform=`rotate(${hrotate}deg)`;
 min.style.transform=`rotate(${mrotate}deg)`;
 sec.style.transform=`rotate(${srotate}deg)`;
// console.log(d)
}, 1000);