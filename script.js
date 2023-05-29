let countDownDate = new Date("May 30, 2023 09:30:").getTime();


let x = setInterval(function() {

 
  let now = new Date().getTime();

  
  let difference = countDownDate - now;

 
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  
  document.getElementById("output").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  
  if (difference < 0) {
    clearInterval(x);
    document.getElementById("output").innerHTML = "!!!!!!!!!";
  }
}, );
