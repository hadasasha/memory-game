let p1 = "https://www.yo-yoo.co.il/101/animals/e22.jpg";
let p2 = "https://www.yo-yoo.co.il/101/animals/e1.jpg";
let p3 = "https://www.yo-yoo.co.il/101/animals/e8.jpg";
let p4 = "https://www.yo-yoo.co.il/101/animals/e9.jpg";
let p5 = "https://www.yo-yoo.co.il/101/animals/e5.jpg";
let p6 = "https://www.yo-yoo.co.il/101/animals/e7.jpg";
let p7 = "https://www.yo-yoo.co.il/101/animals/e3.jpg";
let p8 = "https://www.printkids.co.il/wp-content/uploads/2022/06/Rabbit.png";

let arr1 = [p1, p2, p3, p4, p5, p6, p7, p8];
let arr = [];

function init() {
  arr = arr1.concat(arr1);
  arr = shuffle(arr);
}

function shuffle(arr) {
  let temp, ran1, ran2;

  for (i = 0; i < arr.length * 2; i++) {
    ran1 = Math.floor(Math.random() * arr.length);
    ran2 = Math.floor(Math.random() * arr.length);
    temp = arr[ran1];
    arr[ran1] = arr[ran2];
    arr[ran2] = temp;
  }

  return arr;
}

init();

// let arrStar = ['#', '#', '#', '#', '#', '#', '#', '#']
// console.log(arrStar)

// let i1 = +prompt("enter choos klaf")

// let i2 = +prompt("enter choos klaf")

// let answer = arrStar
// answer[i1] = arr[i1]
// answer[i2] = arr[i2]

let faceArr = [];

function newCard() {
  let board = document.getElementById("board");

  for (i of arr) {
    let card = document.createElement("div");
    let face = document.createElement("img");
    let back = document.createElement("img");
    face.classList = "cardImg cardImgShow";

    back.className = "cardImg ";

    back.src =
      "https://i.etsystatic.com/12829399/r/il/72e93e/2193839146/il_794xN.2193839146_250c.jpg";
    face.src = i;
    card.append(back, face);
    card.className = "card";
    board.append(card);
    card.onclick = flip;
  }
}
newCard();

// function flip () {
//     // debugger

//     face.classList.toggle("cardImgShow");
//     faceArr.push(card);
//     card.removeEventListener("click", flip);
//     if(faceArr.length == 2){

//         console.log("now you need to stop")

//         if(faceArr[0].children[1].src == faceArr[1].children[1].src){
//             console.log("zuuugggg.. please del back");
//             // back.classList.toggle("cardImgShow");
//             // face.classList.remove("cardImgShow");

//         }
//         else if(faceArr[0].children[1].src !== faceArr[1].children[1].src){
//             setTimeout( (faceArr) => {
//                 (faceArr[0].children[1]).classList.toggle("cardImgShow");
//                 (faceArr[1].children[1]).classList.toggle("cardImgShow");
//                 faceArr[0].addEventListener("click", flip);
//                 faceArr[1].addEventListener("click", flip);
//             } , 1500 , faceArr)

//             console.log("its not zug")
//         }
//         faceArr=[];
//     }
// }

// newCard()
// ;

function flip(event) {
  // debugger

  event.target.classList.toggle("cardImgShow");
  faceArr.push(event.currentTarget);
  // event.onclick=null;
  console.log(faceArr);
  if (faceArr.length == 2) {
    faceArr[0].onclick = null;
    faceArr[1].onclick = null;

    if (faceArr[0].children[1].src == faceArr[1].children[1].src) {
    } else if (faceArr[0].children[1].src !== faceArr[1].children[1].src) {
      setTimeout(
        (faceArr) => {
          faceArr[0].children[1].classList.toggle("cardImgShow");
          faceArr[1].children[1].classList.toggle("cardImgShow");
          faceArr[0].onclick = flip;
          faceArr[1].onclick = flip;
        },
        1000,
        faceArr
      );
    }
    faceArr = [];
  }
}
