var regex = /^([a-zA-Z0-9_]){3,}$/;
var regex1 =/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
var sitename = document.getElementById("sitename");
var siteinput = document.getElementById("siteinput");
var allsites = [];

// -----------------------------------------------------------------------------------------------------------------------------

function vailde() {
if(allsites.length==0){
  if (regex1.test(siteinput.value) === true &&regex.test(sitename.value) === true) {
    document.getElementById("submitbtn").classList.remove("disabled");
  } else if (
    regex1.test(siteinput.value) === false || regex.test(sitename.value) === false) {
    document.getElementById("submitbtn").classList.add("disabled");
    
  }
}else if(allsites.length>0){
  for(var i=0;i<allsites.length;i++){
    if (regex1.test(siteinput.value) === true &&regex.test(sitename.value) === true &&allsites[i].name.toLowerCase()!==sitename.value.toLowerCase()) {
      document.getElementById("submitbtn").classList.remove("disabled");
    } else if (
      regex1.test(siteinput.value) === false || regex.test(sitename.value) === false||allsites[i].name.toLowerCase()==sitename.value.toLowerCase( ) ){
      document.getElementById("submitbtn").classList.add("disabled");
    }
} }}

// -----------------------------------------------------------------------------------------------------------------------------

if (localStorage.getItem("sites") !== null) {
  allsites = JSON.parse(localStorage.getItem("sites"));
  display(allsites);
}

// -----------------------------------------------------------------------------------------------------------------------------

function addWeb() {
  var site = {
    name: sitename.value,
    url: siteinput.value,
  };
  allsites.push(site);
  console.log(allsites);
  localStorage.setItem("sites", JSON.stringify(allsites));
  clearForm();
  display(allsites);
  document.getElementById("submitbtn").classList.add("disabled");
  document
    .getElementById("check1")
    .classList.replace("text-success", "text-white");
  document
    .getElementById("check2")
    .classList.replace("text-success", "text-white");
    document
    .getElementById("check3")
    .classList.replace("text-success", "text-white");

}

// -----------------------------------------------------------------------------------------------------------------------------

function clearForm() {
  sitename.value = "";
  siteinput.value = "";
}

// -----------------------------------------------------------------------------------------------------------------------------

function display(index) {
  var sit = "";
  for (var i = 0; i < index.length; i++) {
    sit += `
<tr>
<th>${i}</th>
<th>${index[i].name}</th>
<th><button class="btn btn-info" onclick="visitweb(${i})">Visit</button></th>
<th><button class="btn btn-danger" onclick="deleteweb(${i})">Delete</button></th>
</tr> `;
  }
  document.getElementById("t-body").innerHTML = sit;
}

// -----------------------------------------------------------------------------------------------------------------------------

function visitweb(index) {
  open(`https://${allsites[index].url}`);
}

// -----------------------------------------------------------------------------------------------------------------------------

function deleteweb(index) {
  allsites.splice(index, 1);
  localStorage.setItem("sites", JSON.stringify(allsites));
  display(allsites);
}

// -----------------------------------------------------------------------------------------------------------------------------

function try2() {
  if(sitename.value==""){
    document.getElementById("check1").classList.add("text-white");
    document.getElementById("check1").classList.remove("text-danger");
    document.getElementById("check1").classList.remove("text-success");
  } else{
    if (regex.test(sitename.value) === true) {
      document.getElementById("check1").classList.add("text-success");
      document.getElementById("check1").classList.remove("text-danger");
      document.getElementById("check1").classList.remove("text-white");
    } else if (regex.test(sitename.value) === false) {
      document.getElementById("check1").classList.add("text-danger");
      document.getElementById("check1").classList.remove("text-success");
      document.getElementById("check1").classList.remove("text-white");
    }
  }
}

// -----------------------------------------------------------------------------------------------------------------------------

function try3() {
  if(siteinput.value==""){
    document.getElementById("check2").classList.add("text-white");
    document.getElementById("check2").classList.remove("text-danger");
    document.getElementById("check2").classList.remove("text-success");
  } else{
    if (regex1.test(siteinput.value) === true) {
      document.getElementById("check2").classList.add("text-success");
      document.getElementById("check2").classList.remove("text-danger");
      document.getElementById("check2").classList.remove("text-white");
    } else if (regex1.test(siteinput.value) === false) {
      document.getElementById("check2").classList.add("text-danger");
      document.getElementById("check2").classList.remove("text-success");
      document.getElementById("check2").classList.remove("text-white");
    }
  }
}

// -----------------------------------------------------------------------------------------------------------------------------

function try4(){
  if(allsites.length==0){
  if(sitename.value==""){
    document.getElementById("check3").classList.add("text-white");
    document.getElementById("check3").classList.remove("text-danger");
    document.getElementById("check3").classList.remove("text-success");
  }else{
document.getElementById("check3").classList.add("text-success");
document.getElementById("check3").classList.remove("text-danger");
document.getElementById("check3").classList.remove("text-white");
  }
  }
  else if(allsites.length>0){
if(sitename.value==""){
  document.getElementById("check3").classList.add("text-white");
    document.getElementById("check3").classList.remove("text-danger");
    document.getElementById("check3").classList.remove("text-success");
}else{
  document.getElementById("check3").classList.add("text-white");

          

  for(var i=0;i<allsites.length;i++){

    console.log(allsites[i].name,sitename.value.toLowerCase());
      if(allsites[i].name.toLowerCase() !== sitename.value.toLowerCase()){ 
        console.log("hello");
        document.getElementById("check3").classList.add("text-success");
        document.getElementById("check3").classList.remove("text-danger");
        document.getElementById("check3").classList.remove("text-white");
      }else if (allsites[i].name.toLowerCase() == sitename.value.toLowerCase()){
        document.getElementById("check3").classList.add("text-danger");
          document.getElementById("check3").classList.remove("text-success");
          document.getElementById("check3").classList.remove("text-white");
        }}
}
    }
    }
  


