
let array = [];
arrEmojis=["😀","😃","😄","😁","😆","😅","😂","🤣","😍","🥰","😘","😚","😋","😛","😝","👩‍💻","👨‍💻","👩‍💼","🧛‍♀️","👋🏻","🤚🏻","🖐🏻","✋🏻","🖖🏻","👌🏻","🤘🏻","🤏🏻","✌🏻","🤞🏻","🤟🏻","🤘🏻","🖐🏻","✋🏻","🖖🏻","👌🏻","🤏🏻","🤏🏻","✌🏻","🤞🏻","🤟🏻","🤘🏻", "🤘🏻","🤙🏻","👈🏻","👉🏻","👆🏻","🖕🏻","👇🏻","☝🏻","👍🏻","👎🏻","✊🏻","👊🏻","🤛🏻","🤜🏻","👏🏻","🙌🏻","👐🏻","🤲🏻","🙏🏻","🤸🏻‍♂️","🤽🏻‍♀️","🤽🏻","🤽🏻‍♂️","🤾🏻‍♀️","🤾🏻","🤾🏻‍♂️","🤹🏻‍♀️","🤹🏻","🤹🏻‍♂️","🧘🏻‍♀️","🧘🏻","🧘🏻‍♂️","🛀🏻","🛌🏻","🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐻‍❄️","🐨","🐯","🦁","🐮","🐷","🐽","🐸","🐵","🙈","🙉","🙊","🐒","🐔","🐧","🐦","🐤"];

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