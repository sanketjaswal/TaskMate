
export const getDays = () => {

let today = new Date(); 
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();


if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

let yesterday = yyyy + '-' + mm + '-' + dd-1;
let tommorow = yyyy + '-' + mm + '-' + dd+1;
today = yyyy + '-' + mm + '-' + dd;
return today, yesterday, tommorow;
}
