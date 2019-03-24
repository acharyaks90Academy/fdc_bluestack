var upcomingList = [
    {
        dateFix: new Date().getTime(),
        campaign:"Whats App",
        price: 100,
        id: 1
    },
    {
        dateFix: new Date().getTime(),
        campaign:"Mole Slayer",
        price: 120,
        id: 2
    }
]

var table = document.getElementById("upcomingTable");
let insertIndex = 3;
for(let i =0;i<upcomingList.length;++i){
    var row = table.insertRow(insertIndex++);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    // Add some text to the new cells:
    cell1.innerHTML = upcomingList[i].dateFix;
    cell2.innerHTML = upcomingList[i].campaign;
    cell3.innerHTML = upcomingList[i].price;
    cell4.innerHTML = upcomingList[i].id;
}
// Create an empty <tr> element and add it to the 1st position of the table:
