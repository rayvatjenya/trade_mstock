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
