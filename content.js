
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
      news();
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


const news = () =>{
  console.log(document.querySelector('#search').value)
  if(document.querySelector('#search').value == null){
    var term = 'african';
  }
  else{
  var term = document.querySelector('#search').value;}
  var url = 'http://newsapi.org/v2/everything?' + 'q='+  term + '&charity' + '&apiKey=1a96f921ca6149a8b0b50393a51f4ae2';
  var req = new Request(url);
  fetch(req)
    .then(response => response.json())
    .then(newsDisplay);
}


//hardcoded initial headline display(search term: african), is changed depending on what the new search term is


var titles = ["Did Africa...", "These spec...", "Coronav...", "How Afric...", "Locust sw..."];
var imgs = ["https://techcrunch.com/wp-content/uploads/2019/04/africa-vc1.jpg?w=753", "https://techcrunch.com/wp-content/uploads/2019/04/africa-vc1.jpg?w=753"
, "https://ichef.bbci.co.uk/news/1024/branded_news/39E6/production/_111122841_lagos_airport_coronavirus.jpg",
"https://ichef.bbci.co.uk/news/1024/branded_news/BD38/production/_110904484_gettyimages-1026437510.jpg", "https://ichef.bbci.co.uk/news/1024/branded_news/CFAC/production/_110946135_gettyimages-1205776153.jpg"];
var srcs = ["http://techcrunch.com/2020/03/04/did-african-startups-raise-496m-1b-or-2b-in-2019/", "http://techcrunch.com/2020/02/19/these-specialized-africa-vc-funds-are-welcoming-co-investors/",
"https://www.bbc.co.uk/news/world-africa-51710617", "https://www.bbc.co.uk/news/world-africa-51092504", "https://www.bbc.co.uk/news/world-africa-51547573"];

var arr = [];
for(i = 0; i<5; i++){
  var title = titles[i];
  var img = imgs[i];
  var src = srcs[i];
  var toDisplay = `<div class="news-card">
    <div>
    <img src = ${img}>
    <h3>${title}</h3>
    <div class = "footer">
    <a href = "${src} target="${src}" style = "color: black; text-decoration:none">
        View article </a>
    </div>
    </div></section>
    `
    arr.push(toDisplay);}


 for(i=0; i<arr.length;i++){
    document.getElementById('news').innerHTML += arr[i];}
  

const newsDisplay = (data) =>{
  document.getElementById('news').innerHTML = ""
  console.log(data)
  var arr = [];
  for(i = 0; i < 5; i++){
    var article = data.articles[i];
    var title = article.title;
    var img = article.urlToImage;
    var src = article.url;
    var toDisplay = `<div class="news-card">
    <div>
    <img src = ${img}>
    <h3>${title}</h3>
    <div class = "footer">
      <a href = "${src} target="${src}" style = "color: black; text-decoration:none">
        View article </a>
    </div>
    </div></section>
    `
    arr.push(toDisplay);}

  for(i=0; i<arr.length;i++){
    document.getElementById('news').innerHTML += arr[i];}
  }
