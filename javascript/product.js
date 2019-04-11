 var productdisplay = document.getElementById('products');

 productdisplay.innerHTML = "Boo";

 var db = firebase.firestore();
 db.collection("products").get().then((querySnapshot) => {

 productdisplay.innerHTML = "";

 querySnapshot.forEach((doc) => {

 productdisplay.innerHTML += 
    `
    <div class='card m-1' style='width: 16rem;'>
    <img class='card-img-top' src=${doc.data().productimage}>
          <div class='card-body'>
            <h5 class='card-title'>${doc.data().productname}</h5>
    <p class='card-text'>${doc.data().productprice}</p>
          </div>
          <div class='card-footer text-muted text-center'>  
            <a href='#' class='btn btn-primary'>Buy</a>
          </div>
        </div>


         `
 });


 });