function Clock(){

  const now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let dayNum = now.getDay();
  const week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let day = week[dayNum];
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  month = month < 10 ? "0" + month :month;
  date = date < 10 ? "0" + date :date;
  hour = hour < 10 ? "0" + hour :hour;
  min = min < 10 ? "0" + min :min;
  sec = sec < 10 ? "0" + sec :sec;

  // let today = '${year}/${month}/${date} ${day}';
  // let time = '&{hour}:${min}:${sec}';

  // document.querySelector("clock-date").innerHTML = today;
  // document.querySelector("clock-time").innerHTML = time;

  document.getElementById('date').innerText = year + "/" + month + "/" + date + " " + day + ".";
  document.getElementById('time').innerText = hour + ":" + min + ":" + sec;

}

setInterval(Clock, 1000);