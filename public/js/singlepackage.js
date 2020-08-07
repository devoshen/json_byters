
// customise the content displayed on package page

let display = document.querySelector('.container');
let startdate = document.querySelector('.start-date');
let enddate = document.querySelector('.end-date');

package_enddate = enddate.innerHTML;
let db_enddate = new Date(package_enddate);

package_startdate = startdate.innerHTML;
let db_startdate = new Date(package_startdate);

// customize the end date style
let formatted_pack_enddate = db_enddate.getFullYear() + "/" + (db_enddate.getMonth() + 1) + "/" + db_enddate.getDate();

// customize the start date style
let formatted_pack_strtdate = db_startdate.getFullYear() + "/" + (db_startdate.getMonth() + 1) + "/" + db_startdate.getDate();


let currentdate = new Date();

// checks if package startdate is less than current date
if (db_startdate < currentdate) {
  startdate.classList.add('date');
  startdate.innerHTML = formatted_pack_strtdate;
  enddate.innerHTML = formatted_pack_enddate;
} else {
  startdate.innerHTML = formatted_pack_strtdate;
  enddate.innerHTML = formatted_pack_enddate;
}


