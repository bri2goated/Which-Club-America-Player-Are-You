let counter = 0;
let button = document.querySelector("button");
let result = document.querySelector(".result");
let mala = document.querySelector(".Mala");
let bomba = document.querySelector(".Bomba");
let nahin = document.querySelector(".Nahin");
let igor = document.querySelector(".Igor");
let countmsg = document. querySelector (".countmsg");
button.onclick = function() {
 counter = counter + 1; 
    let ans1 = document.querySelector(".q1").value;
    let ans2 = document.querySelector(".q2").value;

    console.log(ans1);
    console.log(ans2);
    if (ans1 > 0 && ans1 < 15 && ans2 === "Nice and playful") {
        result.innerHTML = " you picked " + ans1 + " and " + ans2 + " you are Luis Angel Malagon";
        mala.style.display = "block";
    }

    else if (ans1 > 15 && ans1 < 34 && ans2 === "Nice and playful") {
        result.innerHTML = " you picked " + ans1 + " and " + ans2 + " you are Henry Martin";
        bomba.style.display = "block";
    }

    else if (ans1 > 0 && ans1 < 15 && ans2 === "Rude and sarcastic") {
        result.innerHTML = " you picked " + ans1 + " and " + ans2 + " you are Kevin Alvarez";
        nahin.style.display = "block";
    }

    else if (ans1 > 15 && ans1 < 34 && ans2 === "Rude and sarcastic") {
        result.innerHTML = " you picked " + ans1 + " and " + ans2 + " you are Igor";
        igor.style.display = "block";
    }
    else {
 result.innerHTML = "Incorrect inputs, try again";
    }
        
    countmsg.innerHTML = "you took this quiz" + counter + "time/s";
	


};