function getRequest() {
    fetch('http://localhost:3000/tobias')
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function getTable() {
    fetch('http://localhost:3000/getTable')
        .then((response) => response.json())
        .then(
            data => {
                console.log(data);
                if (data.length > 0) {

                    var temp = "";
                    temp += "<tr><th> ElevID </th><th> Fornavn </th><th> Etternavn </th><th> Klassetrinn </th><th> Hobby </th><th> Programfag </th><th> Gender </th><th> Datamaskin </th></tr>";
                    data.forEach((itemData) => {
                        temp += "<tr>";
                        temp += "<td>" + itemData.ElevID + "</td>";
                        temp += "<td>" + itemData.Fornavn + "</td>";
                        temp += "<td>" + itemData.Etternavn + "</td>";
                        temp += "<td>" + itemData.Klassetrinn + "</td>";
                        temp += "<td>" + itemData.Hobby + "</td>";
                        temp += "<td>" + itemData.Programfag + "</td>";
                        temp += "<td>" + itemData.Gender + "</td>";
                        temp += "<td>" + itemData.Datamaskin + "</td></tr>";
                    });
                    document.getElementById('SQLTable').innerHTML = temp;
                }
            }
        );
}
