EmptyOrNot2 ();

document.querySelector(".all i").addEventListener("click", () => {
    document.querySelector(".list2").classList.toggle("hiddenList2"); 
})

document.querySelectorAll(".all ul li").forEach((li) => {
    li.addEventListener("click", (e) => {
        document.querySelector(".all p").textContent = e.target.textContent; 
        document.querySelector(".list2").classList.toggle("hiddenList2"); 
    })
})

let best2List = document.querySelectorAll(".best2 ul li a"); 
best2List.forEach((a) => {
    a.addEventListener("click", (e) => {
        for (let i = 0; i < best2List.length; i++) {
            best2List[i].classList.remove("active"); 
        }
        e.target.classList.add("active");
    })
})

let proBoxes = document.querySelectorAll(".pro"); 
document.querySelector(".favLink").addEventListener("click", () => {
    proBoxes.forEach((div) => {
        div.classList.add("hiddenPro"); 
        document.querySelector(".favPro").classList.remove("hiddenPro");
    })
}); 

document.querySelector(".newLink").addEventListener("click", () => {
    proBoxes.forEach((div) => {
        div.classList.add("hiddenPro"); 
        document.querySelector(".newPro").classList.remove("hiddenPro");
    })
});

document.querySelector(".boughtLink").addEventListener("click", () => {
    proBoxes.forEach((div) => {
        div.classList.add("hiddenPro"); 
        document.querySelector(".boughPro").classList.remove("hiddenPro");
    })
});

let addedPro = []; 
document.querySelectorAll(".element .fa-heart").forEach((i) => {
    i.addEventListener("click", (e) => {
        e.target.classList.add("red");
        let information = e.target.parentElement.parentElement.parentElement.parentElement.parentElement; 
        let ImgSrc = information.querySelector("img").getAttribute("src"); 
        let color = information.querySelector(".colors").innerHTML;
        let namePro = information.querySelector(".title").textContent;
        let price = information.querySelectorAll("p")[1].innerHTML;
        if (addedPro.includes(namePro)) {
            window.alert("you've already added this item to your favorite list!");
        } else {
            addedPro.push(namePro);
            document.querySelector(".error").classList.add("transparent");
            let favorite = document.createElement("div"); 
            favorite.classList.add("element"); 
            favorite.innerHTML = `
            <div class="out">
                <img src="${ImgSrc}" alt="" width="80">
            </div>
            <div class="elmntInfor">
                <div class="up1"></div>
                <div class="down1">
                    <ul class="colors">
                        ${color}
                    </ul>
                    <div class="price">
                        <div class="inf">
                            <p class="title">${namePro}</p>
                            <p>${price}</p>
                        </div>
                        <div class="icons">
                            <i class="fa-solid fa-trash red"></i>
                            <i class="fa-regular fa-plus"></i>
                        </div>
                    </div>
                </div>
            </div>`; 
            let favBox = document.querySelector(".favPro");
            favBox.append(favorite);
            let del = favorite.querySelector(".fa-trash");
            del.style.cssText = "font-size: 10px; margin-bottom: 1px; cursor: pointer;";
            del.addEventListener("click", (eve) => {
                eve.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
                if (document.querySelector(".favPro").children.length === 1) {
                    document.querySelector(".error").classList.remove("transparent");
                } 
                addedPro.splice(addedPro.indexOf(favorite.querySelector(".title").textContent),1);
                e.target.classList.remove("red");
            });
        }
    });
});

let navButtons = document.querySelectorAll(".account i"); 
navButtons.forEach((i) => {
    i.addEventListener("click", (e) => {
        for (let j = 0; j < navButtons.length; j++) {
            navButtons[j].classList.remove("activeI");
        }
        e.target.classList.add("activeI");
    })
})

document.querySelector(".fa-cart-shopping").addEventListener("click", (() => {
    document.querySelector(".right .user").classList.add("hiddenPro");
    document.querySelector(".right .cart").classList.remove("hiddenPro");
    document.querySelector(".right .logInUser").classList.add("hiddenPro");
})); 

document.querySelector(".fa-user").addEventListener("click", () => {
    document.querySelector(".right .cart").classList.add("hiddenPro"); 
    document.querySelector(".right .user").classList.remove("hiddenPro"); 
    document.querySelector(".right .logInUser").classList.add("hiddenPro");
});

document.querySelector(".signUp .outter span").addEventListener("click", ()=> {
    document.querySelector(".right .logInUser").classList.remove("hiddenPro");
    document.querySelector(".right .user").classList.add("hiddenPro");
});

document.querySelector(".logIn .outter span").addEventListener("click", ()=> {
    document.querySelector(".right .logInUser").classList.add("hiddenPro");
    document.querySelector(".right .user").classList.remove("hiddenPro");
});

document.querySelector(".button button").addEventListener("click", () => {
    check();
});

let toBuyPro = [];
let addButtons = document.querySelectorAll(".icons .fa-plus"); 
addButtons.forEach((i) => {
    i.addEventListener("click", (e) => {
        e.target.classList.add("blue");
        let parentElement2 = e.target.parentElement.parentElement.parentElement.parentElement.parentElement; 
        let obj = document.createElement("div"); 
        let proImg = parentElement2.querySelector(".out img").src; 
        let proPrice = parentElement2.querySelector(".inf .priceInto").textContent;
        let proName = parentElement2.querySelector(".inf .mainT").textContent; 
        // console.log(proPrice);
        if (toBuyPro.includes(proName)) {
            window.alert("you've already add this item to your cart"); 
        } else {
            toBuyPro.push(proName);
            obj.classList.add("obj"); 
            obj.innerHTML = `
            <div class="imgObj">
                <img src="${proImg}" alt="">
            </div>
            <div class="details">
                <div class="name">
                    <p class="objName">${proName}</p>
                    <p class="proPrice">${proPrice}</p>
                </div>
                <div class="del">
                    <div class="quantity">
                        <i class="fa-solid fa-caret-up"></i><p>1</p>
                        <i class="fa-solid fa-sort-down"></i>
                    </div>
                    <i class="fa-solid fa-trash trashCart"></i>
                </div>
            </div>
            `;
            document.querySelector(".toBuy").append(obj);
            EmptyOrNot2 ();
            subTotalCalculator();
            totalCalculator();
            obj.querySelector(".trashCart").addEventListener("click", (ev) => {
                toBuyPro.splice(toBuyPro.indexOf(ev.target.parentElement.parentElement.parentElement.querySelector(".objName").textContent), 1); 
                ev.target.parentElement.parentElement.parentElement.remove();
                e.target.classList.remove("blue");
                subTotalCalculator();
                totalCalculator()
                EmptyOrNot2 ();
            }); 
            let quantityNumber = parseInt(obj.querySelector(".quantity p").textContent); 
            obj.querySelector(".fa-caret-up").addEventListener("click", () => {
                quantityNumber += 1;
                obj.querySelector(".fa-caret-up").nextSibling.textContent = ''; 
                obj.querySelector(".fa-caret-up").nextSibling.textContent = quantityNumber;
                subTotalCalculator();
                totalCalculator()
            }); 
            obj.querySelector(".fa-sort-down").addEventListener("click", (event) => {
                if (quantityNumber > 1) {
                    quantityNumber -= 1;
                    obj.querySelector(".fa-caret-up").nextSibling.textContent = ''; 
                    obj.querySelector(".fa-caret-up").nextSibling.textContent = quantityNumber;
                    subTotalCalculator();
                    totalCalculator();
                } else {
                    window.alert("you can buy 0 element");
                    subTotalCalculator();
                    totalCalculator()
                }
            })
        }
    })
}); 

document.querySelector(".cart button").addEventListener("click", () => {
    location. reload()
});

function totalCalculator() {
    let total = 0; 
    total = parseFloat(document.querySelector(".tax").querySelector(".Subtot").textContent.replace("$", "")) + 12; 
    document.querySelector(".tax").querySelector(".total").textContent = "";
    document.querySelector(".tax").querySelector(".total").textContent = `$${total}`;
}

function subTotalCalculator() {
    let subtotal = 0; 
    let objectsArray = document.querySelectorAll(".cart .toBuy .obj"); 
    if (objectsArray.length === 0) {
        subtotal = 0
        document.querySelector(".tax .Subtot").textContent = ""; 
        document.querySelector(".tax .Subtot").textContent = `$${subtotal}`;
    } else {
        objectsArray.forEach((div) => {
            let priceProduct = parseFloat(div.querySelector(".proPrice").textContent.replace("$", "")); 
            let quantityProduct = parseFloat(div.querySelector(".quantity p").textContent.replace("$", "")); 
            subtotal += priceProduct*quantityProduct; 
            document.querySelector(".tax .Subtot").textContent = ""; 
            document.querySelector(".tax .Subtot").textContent = `$${subtotal}`;
        })
    }
}

function EmptyOrNot2 () {
    if (document.querySelector(".cart .toBuy").childNodes.length === 1) {
        document.querySelector(".toBuy .error2").style.cssText = "z-index: 100;"
    } else {
        document.querySelector(".toBuy .error2").style.cssText = "z-index: -10;"
    }
}

function EmptyOrNot () {
    if (document.querySelector(".favPro").children.length >= 2) {
        document.querySelector("error").classList.add("transparent");
        console.log("not empty")
    } else {
        document.querySelector(".error").classList.remove("transparent");
        console.log("empty");
    }
}

function check () {
    checkFirstName();
    checkLastName();
    checkEmail();
    checkPassword();
    sameOrNot();
}

function checkFirstName () {
    let numString = []; 
    for (let k = 0; k < document.querySelector("form .first").value.trim().split('').length; k++) {
        if (!(isNaN(parseInt(document.querySelector("form .first").value.trim().split('')[k])))) {
            numString.push(document.querySelector("form .first").value.trim().split('')[k]);
        }
    }
    if ((document.querySelector("form .first").value.trim() ==='') || (numString.length !== 0)) {
        document.querySelector("form .first").classList.add("errorIn");
        document.querySelector("form .first").classList.remove("admit"); 
    } else {
        document.querySelector("form .first").classList.add("admit"); 
        document.querySelector("form .first").classList.remove("errorIn");
    }
}

function checkLastName () {
    let numString2 = [];
    for (let l = 0; l < document.querySelector("form .last").value.trim().split('').length; l++) {
        if (!(isNaN(parseInt(document.querySelector("form .last").value.trim().split('')[l])))) {
            numString2.push(document.querySelector("form .last").value.trim().split('')[l]);
        }
    }
    if ((document.querySelector("form .last").value.trim() ==='') || (numString2.length !== 0)) {
        document.querySelector("form .last").classList.add("errorIn");
        document.querySelector("form .last").classList.remove("admit"); 
    } else {
        document.querySelector("form .last").classList.add("admit"); 
        document.querySelector("form .last").classList.remove("errorIn");
    }
}

function checkEmail () {
    if ((document.querySelector("form .email").value.split('').slice(-10).join('') === '@gmail.com') && (document.querySelector("form .email").value.length > 10)) {
        document.querySelector("form .email").classList.remove("errorIn"); 
        document.querySelector("form .email").classList.add("admit");
    } else {
        document.querySelector("form .email").classList.add("errorIn"); 
        document.querySelector("form .email").classList.remove("admit");
    }
}

function checkPassword() {
    if (document.querySelector("form .password").value.length < 12) {
        document.querySelector("form .password").classList.add("errorIn"); 
        document.querySelector("form .password").classList.remove("admit");
    } else {
        document.querySelector("form .password").classList.remove("errorIn"); 
        document.querySelector("form .password").classList.add("admit");
    }
}

function sameOrNot() {
    if ((document.querySelector("form .password").value !== document.querySelector("form .check").value) || (document.querySelector("form .check").value ==='')) {
        document.querySelector("form .check").classList.add("errorIn"); 
        document.querySelector("form .check").classList.remove("admit");
    } else {
        document.querySelector("form .check").classList.remove("errorIn"); 
        document.querySelector("form .check").classList.add("admit");
    }
}
