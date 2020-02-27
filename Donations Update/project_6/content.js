
//var coll = document.getElementsByClassName("collapsible");
//var i;
//
//for (i = 0; i < coll.length; i++) {
//  coll[i].addEventListener("click", function() {
//    this.classList.toggle("active");
//    var content = this.nextElementSibling;
//    if (content.style.maxHeight){
//      content.style.maxHeight = null;
//    } else {
//      content.style.maxHeight = content.scrollHeight + "px";
//    } 
//  });
//}

document.querySelector('#search').onkeyup = (ev) => {
  console.log(ev.keyCode);
  if (ev.keyCode === 13) {
      ev.preventDefault();
      search();
  }
};


const search = (ev) => {
  const term = document.querySelector('#search').value;
  console.log(term);
  console.log('search for:', term);
  searchFunction(term);
  if (ev) {
    ev.preventDefault();
}}


const searchFunction = (term) => {
  var input, filter, table, tr, td, i, txtValue;
  input = term;
  filter = input.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}



const submitCat = () =>{
  const categories = document.getElementsByName('category');
  var table =  document.getElementById("myTable");
  var tr = table.getElementsByTagName("tr");
  for(elm of categories){
      if(elm.checked){
        for (i = 0; i < tr.length; i++) {
          var td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            var id =td.id;
            if (id == elm.id) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }
    }}
      