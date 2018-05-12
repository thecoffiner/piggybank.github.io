/* Calculate net balance  */
setInterval(function(){
  if (localStorage.cumulativesalary === undefined) {
    localStorage.cumulativesalary = Number(0);
} else {
    localStorage.cumulativesalary = localStorage.cumulativesalary;
};
if (localStorage.cumulativepocket === undefined) {
  localStorage.cumulativepocket = Number(0);
} else {
  localStorage.cumulativepocket = localStorage.cumulativepocket;
};
if (localStorage.cumulativeotherinc === undefined) {
  localStorage.cumulativeotherinc = Number(0);
} else {
  localStorage.cumulativeotherinc = localStorage.cumulativeotherinc;
};
if (localStorage.cumulativetransport === undefined) {
  localStorage.cumulativetransport = Number(0);
} else {
  localStorage.cumulativetransport = localStorage.cumulativetransport;
};
if (localStorage.cumulativevictuals === undefined) {
  localStorage.cumulativevictuals = Number(0);
} else {
  localStorage.cumulativevictuals = localStorage.cumulativevictuals;
};
if (localStorage.cumulativeotherexp === undefined) {
  localStorage.cumulativeotherexp = Number(0);
} else {
  localStorage.cumulativeotherexp = localStorage.cumulativeotherexp;
};
   var netBalance = Number(localStorage.cumulativesalary)+Number(localStorage.cumulativepocket)+Number(localStorage.cumulativeotherinc)-Number(localStorage.cumulativetransport)-Number(localStorage.cumulativevictuals)-Number(localStorage.cumulativeotherexp);
   console.log(netBalance);
   document.getElementById("remaining").innerHTML ="&#8358"+netBalance;
 }, 1000);



/* When the user clicks on the button,
toggle between hiding and showing the dropdown menu for income  */
function showIncomeTypes() {
    document.getElementById("newInc").classList.toggle("showinc");
}

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches('.addBtnInc')) {

    var dropdowns = document.getElementsByClassName("dropdown-inc");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showinc')) {
        openDropdown.classList.remove('showinc');
      }
    }
  }
})

/* When the user clicks on the button,
toggle between hiding and showing the dropdown menu for expenses */
function showExpenseTypes() {
    document.getElementById("newExp").classList.toggle("showexp");
}

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches('.addBtnExp')) {

    var dropdown = document.getElementsByClassName("dropdown-exp");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      var openDrop = dropdown[i];
      if (openDrop.classList.contains('showexp')) {
        openDrop.classList.remove('showexp');
      }
    }
  }
})

/* When the user clicks on the button,
toggle between hiding and showing the dropdown menu for adding transport expense  */
function newTransport() {
    document.getElementById("transAmount").classList.toggle("showtrans");
}

// Close the dropdown if the user clicks the hide transport expense button
function hideTrans(){
  document.getElementById("transAmount").classList.toggle("showtrans");
}

/* When the user clicks on the button,
log transport expense and log expense description  */


function logTrans(){
  if (document.getElementById("inputTrans").value!=="" && document.getElementById("transDescription").value!=="" && document.getElementById("transDate").value!==""){
  var li = document.createElement("li");
  var span = document.createElement("span");
  var p = document.createElement("date");
  li.classname ="";
  span.classname ="";
  p.classname ="";
  var inputValue = document.getElementById("inputTrans").value;
  var description= document.getElementById("transDescription").value;
  var date= document.getElementById("transDate").value;
  if (localStorage.cumulativetransport) {
    localStorage.cumulativetransport = Number(localStorage.cumulativetransport) + Number(inputValue);
} else {
    localStorage.cumulativetransport = Number(inputValue);
};
  console.log(localStorage.cumulativetransport);

  /* Function logs all transport transactions in object array format  */
  if (localStorage.transportLogInfo){
    var a = JSON.parse(localStorage.getItem("transportLogInfo"));
    var b = {value:inputValue, desc: description, dt: date };
    a.push(b);
    localStorage.setItem("transportLogInfo",JSON.stringify(a));
  } else {
    var a =[], b = {value:inputValue, desc: description, dt: date };
    a.push(b);
    localStorage.setItem("transportLogInfo",JSON.stringify(a));
  };
  console.log(localStorage.transportLogInfo);

  var t = document.createTextNode(inputValue);
  var u= document.createTextNode(description);
  var v= document.createTextNode(date);
  li.appendChild(t);
  span.appendChild(u);
  p.appendChild(v);
  console.log(li);
  console.log(span);
  console.log(p);
  document.getElementById("inputTrans").value ="";
  document.getElementById("transDescription").value ="";
  document.getElementById("transDate").value ="";
  alert("Expense Recorded");
}else{
  alert("Sorry input fields are incomplete, Kindly complete form");
}
}
/* When the user clicks on the button,
display transaction info between selected dates  */
function spoolTransportHistory() {
  document.getElementById("transList").innerHTML="";
  document.getElementById("transSpoolBalance").innerHTML="";
  var a = JSON.parse(localStorage.getItem("transportLogInfo"));
  var sum = 0;
  var startDate= document.getElementById("startDateT").value;
  var endDate= document.getElementById("endDateT").value;
  a.forEach(a=> {
  if (Date.parse(a.dt)>=Date.parse(startDate) && Date.parse(a.dt)<=Date.parse(endDate)){
    var li = document.createElement("li");
    var z =JSON.stringify(a);
    var x = document.createTextNode(z);
    li.appendChild(x);
    document.getElementById("transList").appendChild(li);
    sum+= Number(a.value);
  }
});
    document.getElementById("transSpoolBalance").innerHTML=("Expense incurred for period is &#8358 "+sum+".");
}

/* When the user clicks on the button,
clear transport transaction history  */
function clearTransportHistory() {
  document.getElementById("transList").innerHTML="";
  document.getElementById("transSpoolBalance").innerHTML="";
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown menu for adding victuals expense  */
function newVictuals() {
    document.getElementById("victualsAmount").classList.toggle("showVictuals");
}

// Close the dropdown if the user clicks the hide victuals expense button
function hideVictuals(){
  document.getElementById("victualsAmount").classList.toggle("showVictuals");
}

function logVictuals(){
  if (document.getElementById("inputVictuals").value!=="" && document.getElementById("victualsDescription").value!=="" && document.getElementById("victualsDate").value!==""){
  var li = document.createElement("li");
  var span = document.createElement("span");
  var p = document.createElement("date");
  li.classname ="";
  span.classname ="";
  p.classname ="";
  var inputValue = document.getElementById("inputVictuals").value;
  var description= document.getElementById("victualsDescription").value;
  var date= document.getElementById("victualsDate").value;
  if (localStorage.cumulativevictuals) {
    localStorage.cumulativevictuals = Number(localStorage.cumulativevictuals) + Number(inputValue);
} else {
    localStorage.cumulativevictuals = Number(inputValue);
};
  console.log(localStorage.cumulativevictuals);

  /* Function logs all transport transactions in object array format  */
  if (localStorage.victualsLogInfo){
    var a = JSON.parse(localStorage.getItem("victualsLogInfo"));
    var b = {value:inputValue, desc: description, dt: date };
    a.push(b);
    localStorage.setItem("victualsLogInfo",JSON.stringify(a));
  } else {
    var a =[], b = {value:inputValue, desc: description, dt: date };
    a.push(b);
    localStorage.setItem("victualsLogInfo",JSON.stringify(a));
  };
  console.log(localStorage.victualsLogInfo);

  var t = document.createTextNode(inputValue);
  var u= document.createTextNode(description);
  var v= document.createTextNode(date);
  li.appendChild(t);
  span.appendChild(u);
  p.appendChild(v);
  console.log(li);
  console.log(span);
  console.log(p);
  document.getElementById("inputVictuals").value ="";
  document.getElementById("victualsDescription").value ="";
  document.getElementById("victualsDate").value ="";
  alert("Expense Recorded");
}else{
  alert("Sorry input fields are incomplete, Kindly complete form");
}
}

/* When the user clicks on the button,
display transaction info between selected dates  */
function spoolVictualsHistory() {
  document.getElementById("victualsList").innerHTML="";
  document.getElementById("victualsSpoolBalance").innerHTML="";
  var a = JSON.parse(localStorage.getItem("victualsLogInfo"));
  var sum = 0;
  var startDate= document.getElementById("startDateV").value;
  var endDate= document.getElementById("endDateV").value;
  a.forEach(a=> {
  if (Date.parse(a.dt)>=Date.parse(startDate) && Date.parse(a.dt)<=Date.parse(endDate)){
    var li = document.createElement("li");
    var z =JSON.stringify(a);
    var x = document.createTextNode(z);
    li.appendChild(x);
    document.getElementById("victualsList").appendChild(li);
    sum+= Number(a.value);
  }
});
    document.getElementById("victualsSpoolBalance").innerHTML=("Expense incurred for period is &#8358 " +sum+ ".");
}

/* When the user clicks on the button,
clear transport transaction history  */
function clearVictualsHistory() {
  document.getElementById("victualsList").innerHTML="";
  document.getElementById("victualsSpoolBalance").innerHTML="";
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown menu for adding victuals expense  */
function newOtherExp() {
    document.getElementById("otherExpAmount").classList.toggle("showOtherExp");
}

// Close the dropdown if the user clicks the hide victuals expense button
function hideOtherExp(){
  document.getElementById("otherExpAmount").classList.toggle("showOtherExp");
}

function logOtherExp(){
    if (document.getElementById("inputOtherExp").value!=="" && document.getElementById("otherExpDescription").value!=="" && document.getElementById("otherExpDate").value!==""){
  var li = document.createElement("li");
  var span = document.createElement("span");
  var p = document.createElement("date");
  li.classname ="";
  span.classname ="";
  p.classname ="";
  var inputValue = document.getElementById("inputOtherExp").value;
  var description= document.getElementById("otherExpDescription").value;
  var date= document.getElementById("otherExpDate").value;
  if (localStorage.cumulativeotherexp) {
    localStorage.cumulativeotherexp = Number(localStorage.cumulativeotherexp) + Number(inputValue);
} else {
    localStorage.cumulativeotherexp = Number(inputValue);
};
  console.log(localStorage.cumulativeotherexp);

  /* Function logs all transport transactions in object array format  */
  if (localStorage.otherExpLogInfo){
    var a = JSON.parse(localStorage.getItem("otherExpLogInfo"));
    var b = {value:inputValue, desc: description, dt: date };
    a.push(b);
    localStorage.setItem("otherExpLogInfo",JSON.stringify(a));
  } else {
    var a =[], b = {value:inputValue, desc: description, dt: date };
    a.push(b);
    localStorage.setItem("otherExpLogInfo",JSON.stringify(a));
  };
  console.log(localStorage.otherExpLogInfo);

  var t = document.createTextNode(inputValue);
  var u= document.createTextNode(description);
  var v= document.createTextNode(date);
  li.appendChild(t);
  span.appendChild(u);
  p.appendChild(v);
  console.log(li);
  console.log(span);
  console.log(p);
  document.getElementById("inputOtherExp").value ="";
  document.getElementById("otherExpDescription").value ="";
  document.getElementById("otherExpDate").value ="";
  alert("Expense Recorded");
}else{
  alert("Sorry input fields are incomplete, Kindly complete form");
}
}

/* When the user clicks on the button,
display transaction info between selected dates  */
function spoolOtherExpHistory() {
  document.getElementById("otherExpList").innerHTML="";
  document.getElementById("otherExpSpoolBalance").innerHTML="";
  var a = JSON.parse(localStorage.getItem("otherExpLogInfo"));
  var sum = 0;
  var startDate= document.getElementById("startDateO").value;
  var endDate= document.getElementById("endDateO").value;
  a.forEach(a=> {
  if (Date.parse(a.dt)>=Date.parse(startDate) && Date.parse(a.dt)<=Date.parse(endDate)){
    var li = document.createElement("li");
    var z =JSON.stringify(a);
    var x = document.createTextNode(z);
    li.appendChild(x);
    document.getElementById("otherExpList").appendChild(li);
    sum+= Number(a.value);
  }
});
    document.getElementById("otherExpSpoolBalance").innerHTML=("Expense incurred for period is &#8358 "+sum+ ".");
}

/* When the user clicks on the button,
clear transport transaction history  */
function clearOtherExpHistory() {
  document.getElementById("otherExpList").innerHTML="";
  document.getElementById("otherExpSpoolBalance").innerHTML="";
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown menu for adding salary income  */
function newSalary() {
    document.getElementById("salaryAmount").classList.toggle("showSalary");
}

// Close the dropdown if the user clicks the hide transport expense button
function hideSalary(){
  document.getElementById("salaryAmount").classList.toggle("showSalary");
}

/* When the user clicks on the button,
log transport expense and log salary description  */


function logSalary(){
  if (document.getElementById("inputSalary").value!=="" && document.getElementById("salaryDescription").value!=="" && document.getElementById("salaryDate").value!==""){
  var li = document.createElement("li");
  var span = document.createElement("span");
  var p = document.createElement("date");
  li.classname ="";
  span.classname ="";
  p.classname ="";
  var inputValue = document.getElementById("inputSalary").value;
  var description= document.getElementById("salaryDescription").value;
  var date= document.getElementById("salaryDate").value;
  if (localStorage.cumulativesalary) {
    localStorage.cumulativesalary = Number(localStorage.cumulativesalary) + Number(inputValue);
} else {
    localStorage.cumulativesalary = Number(inputValue);
};
  console.log(localStorage.cumulativesalary);

  /* Function logs all salary transactions in object array format  */
  if (localStorage.salaryLogInfo){
    var a = JSON.parse(localStorage.getItem("salaryLogInfo"));
    var b = {value:inputValue, desc: description, dt: date };
    a.push(b);
    localStorage.setItem("salaryLogInfo",JSON.stringify(a));
  } else {
    var a =[], b = {value:inputValue, desc: description, dt: date };
    a.push(b);
    localStorage.setItem("salaryLogInfo",JSON.stringify(a));
  };
  console.log(localStorage.salaryLogInfo);

  var t = document.createTextNode(inputValue);
  var u= document.createTextNode(description);
  var v= document.createTextNode(date);
  li.appendChild(t);
  span.appendChild(u);
  p.appendChild(v);
  console.log(li);
  console.log(span);
  console.log(p);
  document.getElementById("inputSalary").value ="";
  document.getElementById("salaryDescription").value ="";
  document.getElementById("salaryDate").value ="";
  alert("Income Recorded");
}else{
  alert("Sorry input fields are incomplete, Kindly complete form");
}
}

/* When the user clicks on the button,
display transaction info between selected dates  */
function spoolSalaryHistory() {
  document.getElementById("salaryList").innerHTML="";
  document.getElementById("salarySpoolBalance").innerHTML="";
  var a = JSON.parse(localStorage.getItem("salaryLogInfo"));
  var sum = 0;
  var startDate= document.getElementById("startDateS").value;
  var endDate= document.getElementById("endDateS").value;
  a.forEach(a=> {
  if (Date.parse(a.dt)>=Date.parse(startDate) && Date.parse(a.dt)<=Date.parse(endDate)){
    var li = document.createElement("li");
    var z =JSON.stringify(a);
    var x = document.createTextNode(z);
    li.appendChild(x);
    document.getElementById("salaryList").appendChild(li);
    sum+= Number(a.value);
  }
});
    document.getElementById("salarySpoolBalance").innerHTML=("Income Received for period is &#8358 "+sum+ ".");
}

/* When the user clicks on the button,
clear transport transaction history  */
function clearSalaryHistory() {
  document.getElementById("salaryList").innerHTML="";
  document.getElementById("salarySpoolBalance").innerHTML="";
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown menu for adding pocket money income  */
function newPocket() {
    document.getElementById("pocketAmount").classList.toggle("showPocket");
}

// Close the dropdown if the user clicks the hide pocket money income button
function hidePocket(){
  document.getElementById("pocketAmount").classList.toggle("showPocket");
}

function logPocket(){
  if (document.getElementById("inputPocket").value!=="" && document.getElementById("pocketDescription").value!=="" && document.getElementById("pocketDate").value!==""){
  var li = document.createElement("li");
  var span = document.createElement("span");
  var p = document.createElement("date");
  li.classname ="";
  span.classname ="";
  p.classname ="";
  var inputValue = document.getElementById("inputPocket").value;
  var description= document.getElementById("pocketDescription").value;
  var date= document.getElementById("pocketDate").value;
  if (localStorage.cumulativepocket) {
    localStorage.cumulativepocket = Number(localStorage.cumulativepocket) + Number(inputValue);
} else {
    localStorage.cumulativepocket = Number(inputValue);
};
  console.log(localStorage.cumulativepocket);

  /* Function logs all pocket money transactions in object array format  */
  if (localStorage.pocketsLogInfo){
    var a = JSON.parse(localStorage.getItem("pocketLogInfo"));
    var b = {value:inputValue, desc: description, dt: date };
    a.push(b);
    localStorage.setItem("pocketLogInfo",JSON.stringify(a));
  } else {
    var a =[], b = {value:inputValue, desc: description, dt: date };
    a.push(b);
    localStorage.setItem("pocketLogInfo",JSON.stringify(a));
  };
  console.log(localStorage.pocketLogInfo);

  var t = document.createTextNode(inputValue);
  var u= document.createTextNode(description);
  var v= document.createTextNode(date);
  li.appendChild(t);
  span.appendChild(u);
  p.appendChild(v);
  console.log(li);
  console.log(span);
  console.log(p);
  document.getElementById("inputPocket").value ="";
  document.getElementById("pocketDescription").value ="";
  document.getElementById("pocketDate").value ="";
  alert("Income recorded");
}else{
  alert("Sorry input fields are incomplete, Kindly complete form");
}
}

/* When the user clicks on the button,
display transaction info between selected dates  */
function spoolPocketHistory() {
  document.getElementById("pocketList").innerHTML="";
  document.getElementById("pocketSpoolBalance").innerHTML="";
  var a = JSON.parse(localStorage.getItem("pocketLogInfo"));
  var sum = 0;
  var startDate= document.getElementById("startDateP").value;
  var endDate= document.getElementById("endDateP").value;
  a.forEach(a=> {
  if (Date.parse(a.dt)>=Date.parse(startDate) && Date.parse(a.dt)<=Date.parse(endDate)){
    var li = document.createElement("li");
    var z =JSON.stringify(a);
    var x = document.createTextNode(z);
    li.appendChild(x);
    document.getElementById("pocketList").appendChild(li);
    sum+= Number(a.value);
  }
});
    document.getElementById("pocketSpoolBalance").innerHTML=("Income received for period is &#8358 "+sum+ ".");
}

/* When the user clicks on the button,
clear pocket money transaction history  */
function clearPocketHistory() {
  document.getElementById("pocketList").innerHTML="";
  document.getElementById("pocketSpoolBalance").innerHTML="";
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown menu for adding other income  */
function newOtherInc() {
    document.getElementById("otherIncAmount").classList.toggle("showOtherInc");
}

// Close the dropdown if the user clicks the hide other income button
function hideOtherInc(){
  document.getElementById("otherIncAmount").classList.toggle("showOtherInc");
}

function logOtherInc(){
  if (document.getElementById("inputOtherInc").value!=="" && document.getElementById("otherIncDescription").value!=="" && document.getElementById("otherIncDate").value!==""){
  var li = document.createElement("li");
  var span = document.createElement("span");
  var p = document.createElement("date");
  li.classname ="";
  span.classname ="";
  p.classname ="";
  var inputValue = document.getElementById("inputOtherInc").value;
  var description= document.getElementById("otherIncDescription").value;
  var date= document.getElementById("otherIncDate").value;
  if (localStorage.cumulativeotherinc) {
    localStorage.cumulativeotherinc = Number(localStorage.cumulativeotherinc) + Number(inputValue);
} else {
    localStorage.cumulativeotherinc = Number(inputValue);
};
  console.log(localStorage.cumulativeotherinc);

  /* Function logs all transport transactions in object array format  */
  if (localStorage.otherIncLogInfo){
    var a = JSON.parse(localStorage.getItem("otherIncLogInfo"));
    var b = {value:inputValue, desc: description, dt: date };
    a.push(b);
    localStorage.setItem("otherIncLogInfo",JSON.stringify(a));
  } else {
    var a =[], b = {value:inputValue, desc: description, dt: date };
    a.push(b);
    localStorage.setItem("otherIncLogInfo",JSON.stringify(a));
  };
  console.log(localStorage.otherIncLogInfo);

  var t = document.createTextNode(inputValue);
  var u= document.createTextNode(description);
  var v= document.createTextNode(date);
  li.appendChild(t);
  span.appendChild(u);
  p.appendChild(v);
  console.log(li);
  console.log(span);
  console.log(p);
  document.getElementById("inputOtherInc").value ="";
  document.getElementById("otherIncDescription").value ="";
  document.getElementById("otherIncDate").value ="";
  alert("Income Recorded");
}else{
  alert("Sorry input fields are incomplete, Kindly complete form");
}
}

/* When the user clicks on the button,
display transaction info between selected dates  */
function spoolOtherIncHistory() {
  document.getElementById("otherIncList").innerHTML="";
  document.getElementById("otherIncSpoolBalance").innerHTML="";
  var a = JSON.parse(localStorage.getItem("otherIncLogInfo"));
  var sum = 0;
  var startDate= document.getElementById("startDateI").value;
  var endDate= document.getElementById("endDateI").value;
  a.forEach(a=> {
  if (Date.parse(a.dt)>=Date.parse(startDate) && Date.parse(a.dt)<=Date.parse(endDate)){
    var li = document.createElement("li");
    var z =JSON.stringify(a);
    var x = document.createTextNode(z);
    li.appendChild(x);
    document.getElementById("otherIncList").appendChild(li);
    sum+= Number(a.value);
  }
});
    document.getElementById("otherIncSpoolBalance").innerHTML=("Income received for period is &#8358 "+sum+ ".");
}

/* When the user clicks on the button,
clear transport transaction history  */
function clearOtherIncHistory() {
  document.getElementById("otherIncList").innerHTML="";
  document.getElementById("otherIncSpoolBalance").innerHTML="";
}
