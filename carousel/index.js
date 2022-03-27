const days=document.querySelector('#days');
const hours=document.querySelector('#hours');
const minute=document.querySelector('#mins');
const second=document.querySelector('#seconds');
function countDown(){
    const current=new Date();
    const nextChrismas=new Date(2022,8,31);
    const difference=nextChrismas-current;
    let diffrenceInDays=(difference/1000)/(3600*24);
    let updateDate=Math.floor(diffrenceInDays);
    days.textContent=updateDate;
    // hours
    const remainingHours=(diffrenceInDays-updateDate)*24;
    let updateHours=Math.floor(remainingHours);
   hours.textContent=updateHours;
   //minute
   const remainingMinute=(remainingHours-updateHours)*60;
  const updateMinute=Math.floor(remainingMinute);
  minute.textContent=updateMinute;
//   second
const remainingSecond=(remainingMinute-updateMinute)*60;
second.textContent=Math.floor(remainingSecond)
    
}
setInterval(countDown,1000);