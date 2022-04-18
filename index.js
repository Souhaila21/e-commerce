// let userName = sessionStorage.getItem("users");
// sessionStorage.setItem("users",userName);
// let name=
// document.getElementById("userName").innerHTML = userName;

let form= document.querySelector("form");
let tbody=document.querySelector("tbody");
let product=[];
let item = {
  article: article,
  price: price,
  quantity: quantity
};

function data(){
  if (sessionStorage) {
    let btn= document.getElementById("btn");
    let data= document.querySelectorAll('#article,#price, #quantity');
    sessionStorage.btn = Number(sessionStorage.btn) + 1;
  } else {
    sessionStorage.btn = 1;
    }
  document.querySelectorAll('#article,#price, #quantity').innerHTML = sessionStorage.btn;
}
 
function onAddArticle(e){
    e.preventDefault();
    let article= document.getElementById("article").value;
    let price=document.getElementById("price").value;
    let quantity= document.getElementById("quantity").value;
    let ht= price*quantity;
    let ttc= ht+(ht*0.2);
   
     product.push(JSON.stringify(item));
     JSON.parse;
     localStorage.setItem('products', product);
      
  
      tbody.innerHTML +=
    `<tr>
        <td>${article}</td>
        <td>${price}</td>
        <td>${quantity}</td>
        <td>${ht}</td>
        <td>${ttc}</td>
    </tr>`;
    function clearInput(){
        let btn = document.getElementById('btn');
          let input = document.querySelectorAll('#article,#price, #quantity');

          input.forEach(input => {
                input.value = '';
        }
          )}
   clearInput(); 


   data();
      }
    
      form.addEventListener("submit",onAddArticle);

// let x=localStorage.getItem('#article,#price, #quantity');

//    }}
    //  let data= document.querySelectorAll('#article,#price, #quantity, #ht, #ttc');
    // localStorage.getItem(data=>{
    //  if items='';

  //   })
    
  //  }
   
  // data();
  


// let items={
//   article: article,
//    price: price,
//    quantity: quantity,
//    ht: ht,
//    ttc:ttc
// }
// let data = sessionStrorage.getItem("items");
// if( data) {
// items!=null

// }else{
// show.items;
// }
// function show(){
// localStorage.getItem('products',product).tbody;
// };
// let products= localStorage.getItem("item");
// let item
// function show(){
//   show.tbody;

//  localStorage.getItem('products',product);
//  JSON.parse;
 
//  console.log(show());
// };
// show();



  
 // function submitAndClear (e){
    //     e.preventDefault();
    //     let btn = document.getElementById('btn');
    //   let inputs = document.querySelectorAll('#article, #quantity');
    //   inputs.forEach(input => {
    //     input.value = '';
    //   }); 
    // }

// let btn = getElementById("btn");
//      btn.addEventListener('click', function handleClick(event) {
//         event.preventDefault();
//         Input.value = '';
//       });
    
// function submitAndClear(e) {
//     e.clear();
//     let btn=getElementById("boutonReset");

// btn.submit('clear');
//   }






// let article = document.getElementById('article');

// let btn = document.querySelector('button');
// let table = document.querySelector('table');
// let tbody = document.querySelector('tbody');
// let body= document.querySelector('body')[0];

// btn.addEventListener('click', () => {
//     let tr = document.createElement('tr');
//     let tdName = document.createElement('td');
//     tdName.innerText = article.value;
//     tr.append(tdName);
//     tbody.append(tr);
// })

// let price= document.getElementById('price');

// let tdUnit= document.getElementById('unit');

// btn.addEventListener('click', () => {
//     let tr = document.createElement('tr');
//     let tdUnit = document.createElement('td');
//     tdUnit.innerText = price.value;
//     tr.append(tdUnit);
//     tbody.append(tr);
// })

// let quantity= document.getElementById('quantity');

// btn.addEventListener('click', () => {
//     let tr = document.createElement('tr');
//     let tdQuantity = document.createElement('td');
//     tdQuantity.innerText = quantity.value;
//     tr.append(tdQuantity)
//     tbody.append(tr)
// })

// let ht= document.createElement('ht')
// let tdTotalPriceHt= document.createElement
































