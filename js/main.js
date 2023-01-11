let btn1 = document.getElementById("btn-generate");
let section = document.getElementById("section");
let btn2 = document.getElementById("btn-clear");

let tags = [];
let card;
btn1.addEventListener('click',function(){
    let inputValue = document.forms[0].x1.value;
    if(inputValue != ""){
     
    // create element
    card = document.createElement("div");
    let divv = document.createElement("div")
    let titleOne = document.createElement("h3");
    let titleTwo = document.createElement("h4");
    let Name = document.createElement("p");
    let btnDelete = document.createElement("button");

    btnDelete.className ="btn_remove";

    btnDelete.style.cssText ="font-size:20px; background-color:transparent; border:none; font-weight:bold; color:white; margin-bottom:20px; margin-left:80%"
    // create text node
    let TextTitleOne = document.createTextNode("Hello");
    let TextTitleTwo = document.createTextNode("My Name is");
    let NameValue = document.createTextNode(inputValue);
    let TextButton = document.createTextNode("X");

    //append text to element
    titleOne.appendChild(TextTitleOne);
    titleTwo.appendChild(TextTitleTwo);
    Name.appendChild(NameValue);
    btnDelete.appendChild(TextButton);

    //append element to main div
   
    card.appendChild(titleOne);
    card.appendChild(titleTwo);
    divv.appendChild(Name);
    card.appendChild(btnDelete);
    card.appendChild(divv);

    //style for card
    section.style.cssText = "display:flex ; flex-wrap:wrap; justify-content: center;"
    card.style.cssText ="margin:20px;border: 1px solid #eee ;color:white; text-align:center; width:350px;background-color:rgb(254, 61, 93);padding-top:25px; padding-bottom:25px;border-radius: 25px;";
    titleTwo.style.cssText="margin-bottom:20px; font-size:15px; font-family: Arial, Helvetica, sans-serif; font-weight:bold;"
    titleOne.style.cssText=" font-size:35px; font-family: Arial, Helvetica, sans-serif; font-weight:bold;"
    divv.style.cssText = "background-color:white; color:black; padding : 25px; text-align:center; min-height:120px;"
    Name.style.cssText ="color:rgb(254, 61, 93); font-size:25px; font-family: Arial, Helvetica, sans-serif; font-weight:bold;"  

    tags.push(card);
    console.log(tags);

    let myArr ;
    for(let i = 0; i < tags.length ; i++){
        myArr = tags[i];
    }

    section.appendChild(myArr);
    }
    else{     
        alert("Enter your Name .");
    }
    document.querySelector(".btn_remove").addEventListener('click',function(i){
        card.remove();
    });
});



btn2.addEventListener('click',function(){
    tags =[];
    section.remove();
  
});





















// let inputValue = document.getElementById("txt1").value;

// let MainCard = document.createElement("div");
// let TitleCard = document.createElement("h4");
// let Name = document.createElement("h5");
// let resultName = document.createElement("p");

// let textTitle = document.createTextNode("Hello");
// let NameText = document.createTextNode("My Name is ");
// let resultText = document.createTextNode(inputValue);

// let mySection = document.getElementById("section");

// let btn = document.getElementById("btn1");


// function fun1 (){
//     TitleCard.appendChild(textTitle);
//     Name.appendChild(NameText);

//     mySection.appendChild(MainCard);
//     MainCard.appendChild(TitleCard);
//     MainCard.appendChild(Name);

// }

// btn.addEventListener('click', fun1);

