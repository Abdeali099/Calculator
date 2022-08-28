// console.log("Ya Working");

// ---- Declaring a Varible ----- //

let Buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll('span');
let Ip = document.getElementById('value');

//Setting innerHTML MAximum kength //
Ip.setAttribute("maxlength", 11);

let flag = false;

// ---- Adding Event Listener ----//
for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener('click', function () {

        // let btm=btn[i];
        // console.log(btm);

        let Temp = Ip.innerHTML;
        Ip.innerHTML = "";

        if (btn[i].innerHTML.indexOf('i') > -1) {
            if (Temp.length >= 1) {
                console.log(" Working");
                console.log(btn[i]);
                Temp = Temp.substring(0, Temp.length - 1);
                if (Temp == "") {
                    Ip.innerHTML = "0";
                    Temp = "0";
                }

                else {
                    Ip.innerHTML = Temp;
                }
            }

            flag = true;
        }

        if (Temp.length == 11 && this.innerHTML != "Clear" && this.innerHTML != "=") {
            alert("Can't Insert Beyond 11 Digits!");
        }

        if (this.innerHTML == "=") {
            Ip.innerHTML = eval(Temp);
            flag = false;
        }

        else {
            // Ip.innerHTML="";

            if (this.innerHTML == "Clear") {
                Ip.innerHTML = "0";
            }

            else {

                if (Temp.length !== 11 && flag != true) {

                    if (Temp != "0") {
                        Ip.innerHTML = Temp + this.innerHTML;
                    }

                    else {
                        Ip.innerHTML = this.innerHTML;
                    }
                }

                else {
                    if (flag != true) {

                        Ip.innerHTML = Temp;
                    }
                }

            }

            flag = false;

        }


    });


}