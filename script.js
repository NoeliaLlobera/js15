
let array = [];
arrEmojis=["๐","๐","๐","๐","๐","๐","๐","๐คฃ","๐","๐ฅฐ","๐","๐","๐","๐","๐","๐ฉโ๐ป","๐จโ๐ป","๐ฉโ๐ผ","๐งโโ๏ธ","๐๐ป","๐ค๐ป","๐๐ป","โ๐ป","๐๐ป","๐๐ป","๐ค๐ป","๐ค๐ป","โ๐ป","๐ค๐ป","๐ค๐ป","๐ค๐ป","๐๐ป","โ๐ป","๐๐ป","๐๐ป","๐ค๐ป","๐ค๐ป","โ๐ป","๐ค๐ป","๐ค๐ป","๐ค๐ป", "๐ค๐ป","๐ค๐ป","๐๐ป","๐๐ป","๐๐ป","๐๐ป","๐๐ป","โ๐ป","๐๐ป","๐๐ป","โ๐ป","๐๐ป","๐ค๐ป","๐ค๐ป","๐๐ป","๐๐ป","๐๐ป","๐คฒ๐ป","๐๐ป","๐คธ๐ปโโ๏ธ","๐คฝ๐ปโโ๏ธ","๐คฝ๐ป","๐คฝ๐ปโโ๏ธ","๐คพ๐ปโโ๏ธ","๐คพ๐ป","๐คพ๐ปโโ๏ธ","๐คน๐ปโโ๏ธ","๐คน๐ป","๐คน๐ปโโ๏ธ","๐ง๐ปโโ๏ธ","๐ง๐ป","๐ง๐ปโโ๏ธ","๐๐ป","๐๐ป","๐ถ","๐ฑ","๐ญ","๐น","๐ฐ","๐ฆ","๐ป","๐ผ","๐ปโโ๏ธ","๐จ","๐ฏ","๐ฆ","๐ฎ","๐ท","๐ฝ","๐ธ","๐ต","๐","๐","๐","๐","๐","๐ง","๐ฆ","๐ค"];

let random_num = () =>{
   let x = Math.floor(Math.random() * 101);
    return x
}

// funciones botones
let pusharr = () => {
    let x = random_num();
    let emoji = arrEmojis[x];
    array.push(emoji);    
    document.getElementById("display").innerText = array;
}

let unshift = () => {
    let x = random_num();
    let emoji = arrEmojis[x];
    array.unshift(emoji);   
    document.getElementById("display").innerText = array;
}

let insert = () => {
    let num = document.getElementById("num").value;
    let x = random_num();
    let emoji = arrEmojis[x];
    array.splice(num, 0, emoji);
    document.getElementById("display").innerText = array;
}

let pop = () => {
    array.pop();
    document.getElementById("display").innerText = array;
}

let shift = () => {
    array.shift();
    document.getElementById("display").innerText = array;
}

let remove = () => {
    let num2 = document.getElementById("num2").value;
    array.splice(num2, 1);
    document.getElementById("display").innerText = array;
}