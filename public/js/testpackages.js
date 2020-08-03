

let display = document.querySelector('.container');
let startdate = document.querySelector('.start-date');
let enddate = document.querySelector('.end-date');

package_enddate = enddate.innerHTML;
let db_enddate = new Date(package_enddate);
let formatted_pack_enddate = db_enddate.getDate() + "-" + (db_enddate.getMonth() + 1) + "-" + db_enddate.getFullYear();
console.log(formatted_pack_enddate);
// enddate.innerHTML = formatted_pack_enddate;

package_startdate = startdate.innerHTML;
// console.log(package_startdate);
let db_startdate = new Date(package_startdate);
let formatted_pack_strtdate = db_startdate.getDate() + "-" + (db_startdate.getMonth() + 1) + "-" + db_startdate.getFullYear();
console.log(formatted_pack_strtdate);

let currentdate = new Date();
// let formatted_currentdate = currentdate.getDate() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getFullYear();
// console.log(formatted_currentdate);

if (db_startdate < currentdate) {
  startdate.classList.add('date');
  startdate.innerHTML = formatted_pack_strtdate;
  enddate.innerHTML = formatted_pack_enddate;
} else {
  startdate.innerHTML = formatted_pack_strtdate;
  enddate.innerHTML = formatted_pack_enddate;
}


