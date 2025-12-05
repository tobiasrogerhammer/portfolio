
function fetchData() {

  fetch('http://localhost:3000/selectall/joakim')
  .then((response) => response.json())
  .then((data) => generateTable(data));

}

function generateTable(data) {

   // creates a <table> element and a <tbody> element
   const table = document.getElementById("tablebody");

   var row = table.insertRow(0);
  
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = "ElevID";
    cell2.innerHTML = "Fornavn";
    cell3.innerHTML = "Etternavn";
    cell4.innerHTML = "Hobby";
    cell5.innerHTML = "Kjonn";
    cell6.innerHTML = "Programfag";
    cell7.innerHTML = "Datamaskin";


   data.forEach((element, index) => {

    var row = table.insertRow(index+1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = element.ElevID;
    cell2.innerHTML = element.Fornavn;
    cell3.innerHTML = element.Etternavn;
    cell4.innerHTML = element.Hobby;
    cell5.innerHTML = element.Kjonn;
    cell6.innerHTML = element.Programfag;
    cell7.innerHTML = element.Datamaskin;

   });
}

function updateRow() {

  var input_elevid = document.getElementById("hvilket_elevid_update").value;
  var input_hobby = document.getElementById("hvilken_hobby").value;

  var url = 'http://localhost:3000/deleterow/'+input_elevid;
  
  fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
}

function deleteRow() {

  var input_elevid = document.getElementById("hvilken_elev").value;

  var url = 'http://localhost:3000/deleterow/'+input_elevid;
  
  fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));

}

function insertRow() {

  var input_elevid = document.getElementById("hvilken_elevid_insert").value;
  var input_fornavn = document.getElementById("fornavn_insert").value;
  var input_etternavn = document.getElementById("etternavn_insert").value;
  var input_hobby = document.getElementById("hobby_insert").value;
  var input_kjonn = document.getElementById("kjonn_insert").value;
  var input_programfag = document.getElementById("programfag_insert").value;
  var input_datamaskin = document.getElementById("datamaskin_insert").value;

  


}