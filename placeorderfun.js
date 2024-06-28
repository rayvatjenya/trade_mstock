async  placeBasketOrder123() {
this.aes.AesUtil(128, 1e3);
let t, e, n = localStorage.getItem("JWTtoken");                   
const requestOptions = {        
method: "GET",
redirect: "follow"
};

fetch("http://localhost:5002/mstock/get-basketdata", requestOptions)
.then(res => res.json())
.then((result) => {
let finalresponse = [];

for (let index = 0; index < result.data.length; index++) {          
const     element  = result.data[index];
// console.warn(element); return
let e = {
SYMBOL: element.tradingsymbol,
QUANTITY: +element.quantity,
PRICE: 0,
"qty": +element.quantity,
"price": element.price!=0 && element.price!=undefined ? element.price:"MKT",
"odr_type": element.order_type=="MARKET" ? "MKT" : "LMT",
"product_typ": element.product=="MARGIN" ?"F":"C",
"trg_prc": 0,
"validity": "DAY",
"disc_qty": 0,
"amo": false,
"sec_id": element.token,
"inst_type": "EQUITY",              
"exch": element.exchange,
"buysell": element.transaction_type=="BUY" ? "B" : "S",
"gtdDate": "0000-00-00",
"mktProtectionFlag": "N",
"mktProtectionVal": 0,
"settler": "000000000000"
}
// console.warn(e); 
let l = new Iu, i = localStorage.getItem("ucc_code");
l = l.set("Content-Type", "application/x-www-form-urlencoded");
let r = JSON.parse(localStorage.getItem("userdata"));
e.token_id = r.userdata.TOKENID, e.keyid = r.key.toString(), e.userid = r.userdata.ENTITYID.toString(), 
e.clienttype = r.userdata.UM_USER_TYPE.toString(), e.usercode = r.userdata.USERID.toString(), 
e.pan_no = r.userdata.PANNO.toString(), e.client_id = "8" == r.userdata.SUBTYPE && null != i ? i.toString() : r.userdata.ENTITYID.toString();
let a = this.aes.encrypt(this.envservice.salt, this.envservice.iv, n, JSON.stringify(e)), o = this.envservice.serviceUrl;

const placeOrder = async () => {
try {
const myHeaders = new Headers();
myHeaders.append("accept", "application/json, text/plain, */*");
myHeaders.append("accept-language", "en-US,en;q=0.9");
myHeaders.append("authorisation", "Token "+localStorage.getItem("JWTtoken"));
myHeaders.append("content-type", "application/x-www-form-urlencoded");
// myHeaders.append("Cookie", "AWSALBCORS=N3Ol/rbhCJ0VHb14VjtbpLLm8xULiU2RW/AqsUg7fmaEeQ5Kz6/9hm1iTD8WUu2ha0JIm88fT/OGWecCZ7gpeLj43TyVndzuytAgj/9bwrhuTgZFcBkfHk5u3ac9; Expires=Thu, 04 Jul 2024 07:44:10 GMT; Path=/; SameSite=None; Secure");

// const urlencoded = new URLSearchParams();
// urlencoded.append("\"uBXepPnjzV6P16o9k0+VWOwZ4tPhQXFiuT5o9l9Sh6B82GFTYCGbGwckZwWzzV832ZzyyoSyLaF76LyfKV6vsH9iKwx/t0mrTmCNmVvVy2pClQ2N+HBFK82mRqI0W9Ps+C9fRoSmkySG0zJF/bwaneei62mzPJMDkC3PjuFgs/CbHKTvORrD7bPfMyzQyuR2LZJyBN4an0tkbkY/l2sonJbd61gRW7dEbuENq+kQnVa7+p7jVL4JCH1XHzdVwuiacmLMY6YgvheIdZmAfn7WoL3Fef82gGbtf1IqbOz0zkjEDyZ36M/65eUmhXk+xO2+hCkgc2oBn4ZwE52YhMxp5z/GCkbCm6Haj4iZyrXi7HTgpL7x878wsWxQkpj6KQXa9RUdDE4uhggS2saC8d10qR2rZ/8KFyZvhz2E0Q6GSX306LzQk9EG4t9ZOs9rOUoKb5IHCbTJg50pyX9yEfeuW7JKzoQsUXEmprFP7/FdNeTyxyzfIQVjsCOZBp3H+FZjUhwzq+Civ6kO/iEvuKlItNcDzexUb2esqavV4cHNc7C2ElI3fc0F+W3TUJ8WYVFMR8PhOeHWCZIPPrDTqyTfBdYdE7YgEWnUmHVxNAusUxszDQvNo9kY4QTwbLyvwjto\"", "");

const urlencoded = new URLSearchParams();
urlencoded.append(`"${a}"`, "");

const requestOptions = {
method: "POST",
headers: myHeaders,
body: urlencoded,
redirect: "follow"
};

this.envservice.rsConnectionEndPoint = localStorage.getItem("serviceUrl"), 
this.envservice.serviceUrl = this.envservice.rsConnectionEndPoint;

let response = await fetch(this.envservice.rsConnectionEndPoint+"trade/placeorder", requestOptions)
const result = await response.text();
let eRes = this.aes.decrypt(this.envservice.salt, this.envservice.iv, n, result);
let e1 = JSON.parse(eRes);
console.warn("------------start place order response------------------");

let orderresobj = {
...element,
...e1
}
console.warn(orderresobj);        
finalresponse.push(orderresobj)

if(result.data.length-1 === index){
function convertToCSV(objArray) {
const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
let str = '';
let row = '';

// Create the header row
for (const index in array[0]) {
// Now convert each value to string and comma-separated
row += index + ',';
}
row = row.slice(0, -1);
str += row + '\r\n';

// Create the data rows
for (let i = 0; i < array.length; i++) {
let line = '';
for (const index in array[i]) {
if (line !== '') line += ',';   
line += array[i][index];
}
str += line + '\r\n';
}
return str;
}

function removeCommasFromArray(arr) {
return arr.map(item => {
let newItem = {};
for (let key in item) {
    if (typeof item[key] === 'string') {
        newItem[key] = item[key].replace(/,/g, '');
    } else {
        newItem[key] = item[key];
    }
}
return newItem;
});
}
console.warn("----------------1111")
console.warn(finalresponse)
console.warn("----------------1111")
const filtercsv = removeCommasFromArray(finalresponse);
const csvData = convertToCSV(filtercsv);
const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
saveAs(blob, name+'.csv');

}
console.warn("------------end place order response------------------");
(e1.errorcode = "success" == e1.status) ? (this.bottomSheet.open(gS, {
data: {
    status: e1,
    header: "Order Placed Successfully",
    scripDetails: e,
    from: "o rderEntry"
}
}), this.eventEmit(e1)) : this.bottomSheet.open(gS, {
data: {
    status: e1,
    header: "Order has been Rejected",
    scripDetails: e,
    from: "orderEntry"
}
}), this.dialogRef.close();



} catch (error) {
console.warn(error);
}
};

placeOrder();
}



});

}













async  placeBasketOrder1234() {

              

    // this.eventEmit("1234");

    // return


        // console.warn("---------------harsh"); return
        //  this.getOrderBook("1","1"); 
        // this.mtfCDSLAPI(1)));
        //  return
        //  console.warn("---------------harsh1")
        //  return;
        this.aes.AesUtil(128, 1e3);
        let t, e, n = localStorage.getItem("JWTtoken");
        // if ("GTD" == this.odrFrmdata.validity) {
            // const e = new Date();
            // t = e.getFullYear() + "-" + ("0" + (e.getMonth() + 1)).slice(-2) + "-" + ("0" + e.getDate()).slice(-2);
        // }

const requestOptions = {        
method: "GET",
redirect: "follow"
};
 
fetch("http://localhost:5002/mstock/get-basketdata", requestOptions)
.then(res => res.json())
.then((result) => {

for (let index = 0; index < result.data.length; index++) {          
const element = result.data[index];
// console.warn(element); return
e = {
// SYMBOL: element.tradingsymbol,
// QUANTITY: +element.quantity,
// PRICE: 0,
"qty": +element.quantity,
"price": "MKT",
"odr_type": "MKT",
"product_typ": "C",
"trg_prc": 0,
"validity": "DAY",
"disc_qty": 0,
"amo": false,
"sec_id": element.tradingsymbol,
"inst_type": "EQUITY",              
"exch": element.exchange,
"buysell": "B",
"gtdDate": "0000-00-00",
"mktProtectionFlag": "N",
"mktProtectionVal": 0,
"settler": "000000000000"
}
// console.warn(e); return;
let l = new Iu, i = localStorage.getItem("ucc_code");
l = l.set("Content-Type", "application/x-www-form-urlencoded");
let r = JSON.parse(localStorage.getItem("userdata"));
e.token_id = r.userdata.TOKENID, e.keyid = r.key.toString(), e.userid = r.userdata.ENTITYID.toString(), 
e.clienttype = r.userdata.UM_USER_TYPE.toString(), e.usercode = r.userdata.USERID.toString(), 
e.pan_no = r.userdata.PANNO.toString(), e.client_id = "8" == r.userdata.SUBTYPE && null != i ? i.toString() : r.userdata.ENTITYID.toString();
let a = this.aes.encrypt(this.envservice.salt, this.envservice.iv, n, JSON.stringify(e)), o = this.envservice.serviceUrl;





// myHeaders.append("accept", "application/json, text/plain, */*");
// myHeaders.append("accept-language", "en-US,en;q=0.9");
// myHeaders.append("Authorisation", "Token "+ localStorage.getItem("JWTtoken"));
// myHeaders.append("cache-control", "no-cache");
// myHeaders.append("content-type", "application/x-www-form-urlencoded");
// myHeaders.append("origin", "https://trade.mstock.com");
// myHeaders.append("pragma", "no-cache");
// myHeaders.append("priority", "u=1, i");
// myHeaders.append("referer", "https://trade.mstock.com/");
// myHeaders.append("sec-ch-ua", "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"");
// myHeaders.append("sec-ch-ua-mobile", "?0");
// myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
// myHeaders.append("sec-fetch-dest", "empty");
// myHeaders.append("sec-fetch-mode", "cors");
// myHeaders.append("sec-fetch-site", "same-site");
// myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36");
// myHeaders.append("Cookie", "AWSALB=KH/e0ASp79ZlXHqXxO6XHYMusgriZiidvwn6aLTkBtUVLS/wuuxfLrfMwBmWAcO/6CW85I9ay4CxET5i9OYoTQAmziAzVo62Ro1uhKDDGkjUPlh0XG3HshxoILOM; AWSALBCORS=KH/e0ASp79ZlXHqXxO6XHYMusgriZiidvwn6aLTkBtUVLS/wuuxfLrfMwBmWAcO/6CW85I9ay4CxET5i9OYoTQAmziAzVo62Ro1uhKDDGkjUPlh0XG3HshxoILOM");
// const cookie = this.doc.cookie || "";
// myHeaders.append("Cookie", cookie);




//    console.warn(e); return;
const placeOrder = async () => {
try {
const myHeaders = new Headers();
myHeaders.append("accept", "application/json, text/plain, */*");
myHeaders.append("accept-language", "en-US,en;q=0.9");
myHeaders.append("authorisation", "Token eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNQTM1NzMxMTgiLCJwYW4iOiIxMi8xMi8yMDAzIiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzE5NDQ3MDcwfQ.cuq7Vp08uVs79cwMeK4admzQJeV4-eXRI-la4XvTokZVfhO6RLMN2B_eTX33utRrsTHYWmYKNRqDKks7JA0L_Q");
myHeaders.append("cache-control", "no-cache");
myHeaders.append("content-type", "application/x-www-form-urlencoded");
myHeaders.append("origin", "https://trade.mstock.com");
myHeaders.append("pragma", "no-cache");
myHeaders.append("priority", "u=1, i");
myHeaders.append("referer", "https://trade.mstock.com/");
myHeaders.append("sec-ch-ua", "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"");
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-site", "same-site");
myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36");
myHeaders.append("Cookie", "AWSALB=A42+BtK0Ad18gckrDyGZnwfmA3abeQQ31WrWrQwZUydprP9HXT/9ilzv0fIE/fMI6ONiQw6Z3ZnJGaoebMxXPBtsbGxK9oZc/UnwePGwjGvYGE08rIFlG7K8vpWX; AWSALBCORS=A42+BtK0Ad18gckrDyGZnwfmA3abeQQ31WrWrQwZUydprP9HXT/9ilzv0fIE/fMI6ONiQw6Z3ZnJGaoebMxXPBtsbGxK9oZc/UnwePGwjGvYGE08rIFlG7K8vpWX");

const urlencoded = new URLSearchParams();
urlencoded.append("\"uBXepPnjzV6P16o9k0+VWOwZ4tPhQXFiuT5o9l9Sh6B82GFTYCGbGwckZwWzzV832ZzyyoSyLaF76LyfKV6vsH9iKwx/t0mrTmCNmVvVy2pClQ2N+HBFK82mRqI0W9Ps+C9fRoSmkySG0zJF/bwaneei62mzPJMDkC3PjuFgs/CbHKTvORrD7bPfMyzQyuR2LZJyBN4an0tkbkY/l2sonJbd61gRW7dEbuENq+kQnVa7+p7jVL4JCH1XHzdVwuiacmLMY6YgvheIdZmAfn7WoL3Fef82gGbtf1IqbOz0zkjEDyZ36M/65eUmhXk+xO2+hCkgc2oBn4ZwE52YhMxp5z/GCkbCm6Haj4iZyrXi7HTgpL7x878wsWxQkpj6KQXa9RUdDE4uhggS2saC8d10qR2rZ/8KFyZvhz2E0Q6GSX306LzQk9EG4t9ZOs9rOUoKb5IHCbTJg50pyX9yEfeuW7JKzoQsUXEmprFP7/FdNeTyxyzfIQVjsCOZBp3H+FZjUhwzq+Civ6kO/iEvuKlItNcDzexUb2esqavV4cHNc7C2ElI3fc0F+W3TUJ8WYVFMR8PhOeHWCZIPPrDTqyTfBdYdE7YgEWnUmHVxNAusUxszDQvNo9kY4QTwbLyvwjto\"", "");
// const urlencoded = new URLSearchParams();
// urlencoded.append(`"${a}"`, "");

const requestOptions = {
method: "POST",
headers: myHeaders,
body: urlencoded,
redirect: "follow"
};  
const response = await fetch("https://trade2.mstock.com/trade/placeorder", requestOptions);
const result = await response.text();
//   console.warn("s result");
//   console.warn(result);
let eRes = this.aes.decrypt(this.envservice.salt, this.envservice.iv, n, result);
console.warn(eRes);
let e1 = JSON.parse(eRes);
(e1.errorcode = "success" == e1.status) ? (this.bottomSheet.open(gS, {
        data: {
            status: e1,
            header: "Order Placed Successfully",
            scripDetails: e,
            from: "orderEntry"
        }
    }), this.eventEmit(e1)) : this.bottomSheet.open(gS, {
        data: {
            status: e1,
            header: "Order has been Rejected",
            scripDetails: e,
            from: "orderEntry"
        }
    }), this.dialogRef.close();

    // return new Promise(resolve => {
    //     setTimeout(resolve, 2000); // 2000 milliseconds = 2 seconds
    // });
    
} catch (error) {
console.warn(error);
}
};

        placeOrder();

// return
      
        // navigator.clipboard.writeText(a);
        // alert(this.service.isMACMUser);return;
        // return this.service.isMACMUser ? (window.location.hash.includes("#/charts?sym") && (this.envservice.rsConnectionEndPoint = localStorage.getItem("serviceUrl"), 
        // this.envservice.serviceUrl = this.envservice.rsConnectionEndPoint), this.http.post(this.envservice.rsConnectionEndPoint + "trade/placeorder", encodeURIComponent(JSON.stringify(a)), {
        //     responseType: "text"
        // }).pipe(F((t => {
        //     let e = this.aes.decrypt(this.envservice.salt, this.envservice.iv, n, t);
        //     console.warn('done123')
        //     // navigator.clipboard.writeText(e);
        //     //  let e = {"status":"error","errorcode":"RS-00202","message":"RMS:13312406193417:NSE,EQUITY,2277,MRF,EQ,MA3573118,B,1,F,125280.00000,PLEDGE QTY NOT AVAILABLE TO BUY INSUFFICIENT QTY BY : 1.0000","value":"1"}
        //     // return
        //     // alert(e);return
        //     return JSON.parse(e);
        // })))) 
        // :
        //  this.http.post(o + "trade/placeorder", encodeURIComponent(JSON.stringify(a)), {
        //     responseType: "text"
        // }).pipe(F((t => {
        //     console.warn('done1234')
        //     let e = this.aes.decrypt(this.envservice.salt, this.envservice.iv, n, t);
        //     // let e = {"status":"error","errorcode":"RS-00202","message":"RMS:13312406193417:NSE,EQUITY,2277,MRF,EQ,MA3573118,B,1,F,125280.00000,PLEDGE QTY NOT AVAILABLE TO BUY INSUFFICIENT QTY BY : 1.0000","value":"1"}
           
        //     console.warn("---------------");
        //     console.warn(e)
        //     console.warn("---------------");
        //     return JSON.parse(e);
        // })));
    }
    });

}






async showConfirmDialog1(type,titleval,t) {
    // Create the modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.display = 'block';

    // Create the modal content
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Create the close button
    const closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.innerHTML = '&times;';
    closeButton.onclick = function() {
        modal.style.display = 'none';
    };

    // Create the text
    const text = document.createElement('p');
    text.innerHTML = `Are you sure you want to do <h6>${titleval}</h6>`;

    // Create the yes button
    const yesButton = document.createElement('button');
    yesButton.innerText = 'Yes';
    yesButton.onclick = async function() {
        var styleElement = document.getElementById('uniqueStyle');
        if (styleElement) {
          styleElement.parentNode.removeChild(styleElement);
        }
        modal.style.display = 'none';
        // alert('Confirmed!');
        // console.warn(type)
        if(type==0){
            await this.getKnowBasketMargin1()
        }
        if(type==1){
            await this.placeBasketOrder123();
        }
        if(type==2){
            await this.mtfCDSLAPI_forbasket();
        }
    };

    // Create the no button
    const noButton = document.createElement('button');
    noButton.innerText = 'No';
    noButton.onclick = function() {
        modal.style.display = 'none';
        var styleElement = document.getElementById('uniqueStyle');
        if (styleElement) {
          styleElement.parentNode.removeChild(styleElement);
        }
    };

    // Append elements to modal content
    modalContent.appendChild(closeButton);
    modalContent.appendChild(text);
    modalContent.appendChild(yesButton);
    modalContent.appendChild(noButton);

    // Append modal content to modal
    modal.appendChild(modalContent);

    // Append modal to body
    document.body.appendChild(modal);
}







        //     async getKnowBasketMargin(t) { 
        //         createThreeOptionModal('Select an option:', ['Check Basket Margin', 'Basket Order'], handleSelection);
        //         // , 'Option 3'

        //          function createThreeOptionModal(message, options, callback) {
        //         // Create modal elements
        //         const modal = document.createElement('div');
        //         const modalContent = document.createElement('div');
        //         const modalMessage = document.createElement('p');
        //         const closeButton = document.createElement('span');

        //         // Set modal attributes and styles
        //         modal.setAttribute('id', 'customModal');
        //         modalContent.setAttribute('id', 'modalContent');
        //         modalMessage.textContent = message;
        //         closeButton.textContent = '×';
        //         closeButton.setAttribute('id', 'closeButton');

        //         // Style modal
        //         document.head.insertAdjacentHTML('beforeend', `
        //             <style>
        //                 #customModal {
        //                     display: flex;
        //                     justify-content: center;
        //                     align-items: center;
        //                     position: fixed;
        //                     z-index: 1;
        //                     left: 0;
        //                     top: 0;
        //                     width: 100%;
        //                     height: 100%;
        //                     overflow: auto;
        //                     background-color: rgba(0, 0, 0, 0.4);
        //                 }
        //                 #modalContent {
        //                     background-color: #fefefe;
        //                     padding: 20px;
        //                     border: 1px solid #888;
        //                     width: 80%;
        //                     max-width: 300px;
        //                     text-align: center;
        //                     position: relative;
        //                 }
        //                 #closeButton {
        //                     color: #aaa;
        //                     float: right;
        //                     font-size: 28px;
        //                     font-weight: bold;
        //                     position: absolute;
        //                     top: 10px;
        //                     right: 10px;
        //                     cursor: pointer;
        //                 }
        //                 #closeButton:hover {
        //                     color: black;
        //                 }
        //                 .modal-option {
        //                     display: block;
        //                     margin: 10px 0;
        //                     padding: 10px;
        //                     background-color: #007BFF;
        //                     color: white;
        //                     border: none;
        //                     cursor: pointer;
        //                     width: 100%;
        //                     max-width: 200px;
        //                     margin-left: auto;
        //                     margin-right: auto;
        //                 }
        //                 .modal-option:hover {
        //                     background-color: #0056b3;
        //                 }
        //                .example-form.buy-sell-modal {
        //                     display: none!important;
        //                 }
        //                 .cdk-overlay-dark-backdrop {
        //                   background: rgb(255 255 255 / 32%)!important;
        //                 }
        //                 .cdk-overlay-backdrop {
        //                  position: relative!important;
        //                 }
        //             </style>
        //         `);

        //         // Append message and close button to modal content
        //         modalContent.appendChild(closeButton);
        //         modalContent.appendChild(modalMessage);

        //         // let modelele = document.getElementByClassName('.dialog-container.cdk-drag.order-entry.ng-star-inserted');
        //         // myDiv.style.display = 'none';

        //         // Create and append option buttons to modal content
        //         options.forEach(option => {
        //             const optionButton = document.createElement('button');
        //             optionButton.className = 'modal-option';
        //             optionButton.textContent = option;
        //             optionButton.onclick = () => {
        //                 callback(option);
        //                 document.body.removeChild(modal);
        //             };
        //             modalContent.appendChild(optionButton);
        //         });

        //         // Append modal content to modal
        //         modal.appendChild(modalContent);
        //         document.body.appendChild(modal);

        //         // Close modal when close button is clicked
        //         closeButton.onclick = function() {
        //             document.body.removeChild(modal);
        //         }

        //         // Close modal when clicking outside the modal content
        //         window.onclick = function(event) {
        //             if (event.target == modal) {
        //                 document.body.removeChild(modal);
        //             }
        //         }
        //     }

        //     async handleSelection(option) {
        //         console.warn(`User selected: ${option}`);
        //         if(option=="Check Basket Margin"){
        //             this.getKnowBasketMargin1(t)
                    
        //         }
        //         // location.reload();

        //     }
        // }

        // async getKnowBasketMargin1(t) { 
        
        //     console.warn('getKnowBasketMargin1 called')
        //             const requestOptions = {        
        //                 method: "GET",
        //                 redirect: "follow"
        //             };
                
        //             try {
        //                 const response = await fetch("http://localhost:5002/mstock/get-basketformargin", requestOptions);
        //                 const result = await response.json();
        //                 let finalarr = [];
                
        //                 for (let index = 0; index < result.data.length; index++) {
        //                     const element = result.data[index];
        //                     let l = {
        //                         security_id: element.id,
        //                         product_id: t,
        //                         segment: "E",
        //                         exch_id: "NSE",
        //                         totalremqty: element.qty,
        //                         price: 0,
        //                         buysell: "B",
        //                         trigger_price: 0
        //                     };
                
        //                     console.warn("------------------------");
        //                     console.warn(l);
        //                     console.warn("------------------------");
                
        //                     const n = await this.service.fetchApiPostData(l, "trade/getKnowYourMargin").toPromise();
                            
        //                     let obj = {
        //                         ...element,
        //                         ...n?.message
        //                     };
        //                     finalarr.push(obj);
        //                 }
                
        //                 if (finalarr.length > 0) {
        //                     const csvData = convertToCSV(finalarr);
        //                     // console.warn(finalarr); 
        //                     const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        //                     saveAs(blob, 'mstockmargin.csv');
        //                 }
                
        //             } catch (error) {
        //                 console.error('Error fetching data:', error);
        //             }         
                
        //             function convertToCSV(objArray) {
        //                 const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
        //                 let str = '';
        //                 let row = '';
                      
        //                 // Create the header row
        //                 for (const index in array[0]) {
        //                     row += index + ',';
        //                 }
        //                 row = row.slice(0, -1);
        //                 str += row + '\r\n';
                      
        //                 // Create the data rows
        //                 for (let i = 0; i < array.length; i++) {
        //                     let line = '';
        //                     for (const index in array[i]) {
        //                         if (line !== '') line += ',';   
        //                         line += array[i][index];
        //                     }
        //                     str += line + '\r\n';
        //                 }
        //                 return str;
        //             }
        // }

        
       

//           async  getKnowBasketMargin(t) { 
//                 const requestOptions = {        
//                     method: "GET",
//                     redirect: "follow"
//                   };
//                    fetch("http://localhost:5002/mstock/get-basketformargin", requestOptions)
//                     .then(res => res.json())
//                     .then((result) => {
//                     // console.warn(result); return
//                     let finalarr = [];
//                    for (let index = 0; index < result.data.length; index++) {
//                      const element = result.data[index];
//                      let l = {
//                         security_id: element.id,
//                         // security_id: this.SEC_ID,
//                         product_id: t || this.orderForm.get("Product").value,
//                         segment: this.SEGMENT,
//                         exch_id: this.EXCHANGE,
//                         totalremqty: element.qty,
//                         price: 0,
//                         buysell: this.trade,
//                         trigger_price: this.orderForm.get("trg_prc").value
//                     };
//                     console.warn("------------------------");
//                     console.warn(l);
//                     console.warn("------------------------")
                  
//                    this.service.fetchApiPostData(l, "trade/getKnowYourMargin").subscribe((n => {
//                         let obj = {
//                             id:element.id,
//                             // ...n?.message
//                         }
//                         finalarr.push(obj);
//                         // console.warn(obj);

//                         async function convertToCSV(objArray) {
//                             const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
//                             let str = '';
//                             let row = '';
                          
//                             // Create the header row
//                             for (const index in array[0]) {
//                               // Now convert each value to string and comma-separated
//                               row += index + ',';
//                             }
//                             row = row.slice(0, -1);
//                             str += row + '\r\n';
                          
//                             // Create the data rows
//                             for (let i = 0; i < array.length; i++) {
//                               let line = '';
//                               for (const index in array[i]) {
//                                 if (line !== '') line += ',';   
//                                 line += array[i][index];
//                               }
//                               str += line + '\r\n';
//                             }
//                             return str;
//                            }
                             
                      
//                         if((result.data.length-1)==index && finalarr.length>0){
//                             const csvData = convertToCSV(finalarr);
//    console.warn(finalarr); 
//                            const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
//                            saveAs(blob, 'mstockmargin.csv');
//                         }

//                     }));  
//                 }
//                 // console.warn(finalarr);    return
                  

              

//                 })
//                 .catch(error => {
//                     console.error('Error fetching data:', error);
//                 });         
//             }








// final fun

async placeBasketOrder123() {
    this.aes.AesUtil(128, 1e3);
    let t, e, n = localStorage.getItem("JWTtoken");
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch("http://localhost:5002/mstock/get-basketdata", requestOptions)
        .then(res => res.json())
        .then((result) => {
            let finalresponse = [];

            for (let index = 0; index < result.data.length; index++) {
                const element = result.data[index];
                // console.warn(element); return
                 let popupdetail = {
                    SYMBOL: element.tradingsymbol,
                    QUANTITY: +element.quantity,
                    PRICE: element.price != 0 && element.price != undefined ? element.price : "At Market",
                    SEGMENT: "E",
                    INSTRUMENT: "EQUITY",
                    EXPIRY_DATE: "0001-01-01T00:00:00",
                    OPT_TYPE: "",
                    EXCHANGE: element.exchange,
                    BUY_SELL: element.transaction_type,
                    STRIKE_PRICE: 0
                }
                let e = {
                    "qty": +element.quantity,
                    "price": element.price != 0 && element.price != undefined ? element.price : "MKT",
                    "odr_type": element.order_type == "MARKET" ? "MKT" : "LMT",
                    "product_typ": element.product == "MARGIN" ? "F" : "C",
                    "trg_prc": 0,
                    "validity": "DAY",
                    "disc_qty": 0,
                    "amo": false,
                    "sec_id": element.token,
                    "inst_type": "EQUITY",
                    "exch": element.exchange,
                    "buysell": element.transaction_type == "BUY" ? "B" : "S",
                    "gtdDate": "0000-00-00",
                    "mktProtectionFlag": "N",
                    "mktProtectionVal": 0,
                    "settler": "000000000000"
                }
                // console.warn(e); 
                let l = new Iu,
                    i = localStorage.getItem("ucc_code");
                l = l.set("Content-Type", "application/x-www-form-urlencoded");
                let r = JSON.parse(localStorage.getItem("userdata"));
                e.token_id = r.userdata.TOKENID, e.keyid = r.key.toString(), e.userid = r.userdata.ENTITYID.toString(),
                    e.clienttype = r.userdata.UM_USER_TYPE.toString(), e.usercode = r.userdata.USERID.toString(),
                    e.pan_no = r.userdata.PANNO.toString(), e.client_id = "8" == r.userdata.SUBTYPE && null != i ? i.toString() : r.userdata.ENTITYID.toString();
                let a = this.aes.encrypt(this.envservice.salt, this.envservice.iv, n, JSON.stringify(e)),
                    o = this.envservice.serviceUrl;

                const placeOrder = async () => {
                    try {
                        const myHeaders = new Headers();
                        myHeaders.append("accept", "application/json, text/plain, */*");
                        myHeaders.append("accept-language", "en-US,en;q=0.9");
                        myHeaders.append("authorisation", "Token " + localStorage.getItem("JWTtoken"));
                        myHeaders.append("content-type", "application/x-www-form-urlencoded");
                       
                        const urlencoded = new URLSearchParams();
                        urlencoded.append(`"${a}"`, "");

                        const requestOptions = {
                            method: "POST",
                            headers: myHeaders,
                            body: urlencoded,
                            redirect: "follow"
                        };

                        this.envservice.rsConnectionEndPoint = localStorage.getItem("serviceUrl"),
                            this.envservice.serviceUrl = this.envservice.rsConnectionEndPoint;

                        let response = await fetch(this.envservice.rsConnectionEndPoint + "trade/placeorder", requestOptions)
                        const orderresult = await response.text();
                        let eRes = this.aes.decrypt(this.envservice.salt, this.envservice.iv, n, orderresult);
                        let e1 = JSON.parse(eRes);
                        console.warn("------------start place order response------------------");

                        let orderresobj = {
                            ...element,
                            ...e1
                        }
                        console.warn(orderresobj);
                        finalresponse.push(orderresobj)

                        if (result.data.length - 1 === index) {
                            function convertToCSV(objArray) {
                                const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
                                let str = '';
                                let row = '';

                                // Create the header row
                                for (const index in array[0]) {
                                    // Now convert each value to string and comma-separated
                                    row += index + ',';
                                }
                                row = row.slice(0, -1);
                                str += row + '\r\n';

                                // Create the data rows
                                for (let i = 0; i < array.length; i++) {
                                    let line = '';
                                    for (const index in array[i]) {
                                        if (line !== '') line += ',';
                                        line += array[i][index];
                                    }
                                    str += line + '\r\n';
                                }
                                return str;
                            }

                            function orderdatetime() {
                                let now = new Date();

                                // Extract the components of the date and time
                                let year = now.getFullYear();
                                let month = now.getMonth() + 1; // Months are zero-based
                                let day = now.getDate();
                                let hours = now.getHours();
                                let minutes = now.getMinutes();
                                let seconds = now.getSeconds();
                            
                                // Format the components into a string
                                let formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                                return formattedDateTime;
                            }
                            function removeCommasFromArray(arr) {
                                return arr.map(item => {
                                    let newItem = {};
                                    for (let key in item) {
                                        if (typeof item[key] === 'string') {
                                            newItem[key] = item[key].replace(/,/g, '');
                                        } else {
                                            newItem[key] = item[key];
                                        }
                                    }
                                    return newItem;
                                });
                            }
                            console.warn("----------------Basket Order Final Response-----------------------")
                            console.warn(finalresponse)
                            console.warn("----------------Basket Order Final Response-----------------------")
                            if(finalresponse.length>0){ 
                            const filtercsv = removeCommasFromArray(finalresponse);
                            const csvData = convertToCSV(filtercsv);
                            const blob = new Blob([csvData], {
                                type: 'text/csv;charset=utf-8;'
                            });
                         
                            let datetime = orderdatetime()
                            saveAs(blob,'BasketOrder-'+datetime+'.csv');
                            
                            }


                        }
                        console.warn("------------end place order response------------------");
                        // console.warn(e);
                        
                        (e1.errorcode = "success" == e1.status) ? (this.bottomSheet.open(gS, {
                            data: {
                                status: e1,
                                header: "Order Placed Successfully",
                                scripDetails: popupdetail,
                                from: "orderEntry"
                            }
                        }), this.eventEmit(e1)) : this.bottomSheet.open(gS, {
                            data: {
                                status: e1,
                                header: "Order has been Rejected",
                                scripDetails: popupdetail,
                                from: "orderEntry"
                            }
                        }), this.dialogRef.close();



                    } catch (error) {
                        console.warn(error);
                    }
                };

                placeOrder();
            }

        });

}