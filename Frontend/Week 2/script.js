
//Exercise 1
const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  function buildTable(data) {

    // create table and store it in a let variable
    let table = document.createElement("table");

    // create fields and store it in a let variable
    let fields = Object.keys(data[0]);

    // create the head table row and store it in a let variable
    let headRow = document.createElement("tr");

    fields.forEach(function(field) {
      // create table head and store it in a let variable
      let headCell = document.createElement("th");
      // If the given child is a reference to an existing node in the document, 
      // appendChild() moves it from its current position to the new position

      // Set created node as child of headcell 
      headCell.appendChild(document.createTextNode(field));
      // Set headCell as child of headRow;
      headRow.appendChild(headCell);
    });
    // set headRow as child of the created table
    table.appendChild(headRow);


    data.forEach(function(object) {
        // create table row and store in row variable
      let row = document.createElement("tr");

      fields.forEach(function(field) {
        // create table data cell and store in cell variable
        let cell = document.createElement("td");

        // set created field as child of table data cell
        cell.appendChild(document.createTextNode(object[field]));
        // If the data type in the field is a number
        if (typeof object[field] == "number") {
            // align the text right
          cell.style.textAlign = "right";
        }

        row.appendChild(cell);
      });
      table.appendChild(row);
    });

    return table;
  }
// Create the table in the html
   document.querySelector("#mountains")
    .appendChild(buildTable(MOUNTAINS));

    //Exercise 2

    function byTagName(node, tagName) {
      // Your code here.
      // store in an array
      let nodesFound = [];
      tagName = tagName.toUpperCase();

      function explore(node) {
        // loop through childNodes
        for (let i = 0; i < node.childNodes.length; i++) {
          // store childNodes
          let child = node.childNodes[i];
          // If the childNode type is equal to document.ELEMENT_NODE
          if (child.nodeType == document.ELEMENT_NODE) {
            // if the child node name is equal to the tagname variable, 
            //store them  in the nodesFound array
            if (child.nodeName == tagName) nodesFound.push(child);
            // Serve let child as an  arguement to replace the fucntion parameter of explore()
            explore(child);
          }
        }
      }

      explore(node);
      return found;

    }
  
    console.log(byTagName(document.body, "h1").length);
    // → 1
    console.log(byTagName(document.body, "span").length);
    // → 3
    let para = document.querySelector("p");
    console.log(byTagName(para, "span").length);
    // → 2

