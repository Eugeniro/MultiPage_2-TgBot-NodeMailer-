/*Общие переменные*/
const LastElement = {
    SroElement: 0,
    SumElement: 0,
    DangerElenemt: 0,
    QsElement: 0,
}
let questionFail = ""
let SubFormFailPopUp = ""
const HTMLLoaderPopUp = `<div class="general_waiting">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="613.705px" height="613.705px" viewBox="0 0 613.705 613.705" style="enable-background:new 0 0 613.705 613.705;"
xml:space="preserve">
<g>
<g>
<path d="M594.389,274.302c-12.418-12.462-27.193-18.836-44.311-18.836s-31.555,6.087-43.981,18.478
c-12.418,12.39-18.463,27.215-18.463,44.332c0,17.117,5.959,31.656,18.127,43.975c12.332,12.462,27.193,18.478,44.317,18.478
s31.893-6.088,44.311-18.478c12.419-12.462,18.464-26.857,18.464-43.975C612.853,301.159,606.808,286.692,594.389,274.302z"/>
<path d="M474.542,438.453c-16.114,0-29.543,5.371-40.623,16.472c-11.079,11.029-16.45,24.136-16.45,39.893
c0,15.827,5.285,29.292,16.45,40.68c10.994,11.101,24.509,16.4,40.623,16.4c15.777,0,28.869-5.371,39.949-16.4
c11.416-11.459,17.124-24.853,17.124-40.68c0-15.757-5.787-28.791-17.124-39.893C503.325,443.896,490.319,438.453,474.542,438.453
z"/>
<path d="M482.936,213.855c18.463,0,34.577-6.732,48.006-20.125c13.429-13.464,20.14-29.579,20.14-48.343
c0-19.123-6.718-35.237-20.14-48.701c-13.092-13.106-29.206-19.767-48.006-19.767c-19.137,0-35.251,6.661-48.343,19.767
c-13.429,13.464-20.14,29.579-20.14,48.701c0,18.764,6.718,34.878,20.14,48.343C448.021,207.123,464.136,213.855,482.936,213.855z
"/>
<path d="M297.284,511.289c-14.102,0-26.27,4.942-36.253,15.112c-9.819,9.955-14.768,22.13-14.768,36.597
c0,14.109,4.956,26.284,14.768,35.882c9.991,9.883,22.159,14.825,36.253,14.825c14.438,0,26.435-5.157,36.254-14.825
c9.99-9.812,15.104-21.772,15.104-35.882c0-14.467-5.035-26.856-15.104-36.955C323.805,516.303,311.723,511.289,297.284,511.289z"
/>
<path d="M297.284,0c-20.476,0-37.937,7.09-52.368,21.486c-14.438,14.467-21.486,31.584-21.486,52.067
c0,20.483,7.047,38.245,21.486,52.711c14.438,14.396,31.892,21.486,52.368,21.486c20.476,0,37.937-7.09,52.368-21.486
c14.438-14.467,21.822-32.229,21.822-52.711s-7.384-37.6-21.822-52.067C335.221,7.09,317.76,0,297.284,0z"/>
<path d="M120.363,179.263c9.067,0,17.447-3.008,24.171-9.74c13.436-13.393,13.436-35.237,0-48.629
c-6.725-6.732-15.104-9.74-24.171-9.74c-8.73,0-17.002,3.08-23.835,9.74c-13.987,13.536-13.987,35.093,0,48.629
C103.361,176.184,111.64,179.263,120.363,179.263z"/>
<path d="M120.363,445.472c-12.418,0-22.997,4.87-32.229,13.822c-8.895,8.522-13.429,19.122-13.429,31.513
c0,12.461,4.362,23.204,13.429,32.229c9.067,9.096,19.81,13.751,32.229,13.751c12.419,0,23.162-4.655,32.229-13.751
c9.067-9.024,13.429-19.768,13.429-32.229c0-12.391-4.533-22.99-13.429-31.513C143.36,450.342,132.79,445.472,120.363,445.472z"/>
<path d="M68.669,290.058c-7.721-7.735-16.788-11.745-27.867-11.745s-20.812,4.01-28.533,11.745S0.853,307.175,0.853,318.275
c0,11.029,3.695,20.77,11.416,28.505c7.721,7.734,17.454,11.459,28.533,11.459s20.139-3.725,27.867-11.459
c7.72-7.735,11.752-17.476,11.752-28.505C80.414,307.175,76.389,297.792,68.669,290.058z"/>
</g>
</g>
</svg>
</div>`
const colorsWhite = ["#CED2D8", "#9FA7B2", "#717D8E"]
const BTN_Header = document.querySelectorAll(".header_body_top_info_right>.BTN");
if (window.screen.width!==window.innerWidth)
{
    if (window.innerWidth < 1270) {
        for (let i = 0; i < BTN_Header.length; i++) {
            if (!BTN_Header[i].classList.contains("circle")) BTN_Header[i].classList.add("circle");
    
        }
    }
}else
{
    if (window.screen.width < 1270) {
        for (let i = 0; i < BTN_Header.length; i++) {
            if (!BTN_Header[i].classList.contains("circle")) BTN_Header[i].classList.add("circle");
    
        }
    }
}
const HeaderMobBurger = document.querySelector(".header_body_top_info_Burger");
const BurgerClickFN = () => {
    document.querySelector(".header_MobMenu").classList.toggle("active")
}
if (window.screen.width!==window.innerWidth)
{
    if (window.innerWidth < 610) {
        HeaderMobBurger.addEventListener("click", BurgerClickFN)
    }
}else
{
    if (window.screen.width < 610) {
        HeaderMobBurger.addEventListener("click", BurgerClickFN)
    }
}
function SwitchButtons(Button, index, Colors) {
    for (let i = 1; i < Button.length; i++) {
        if (index - i < 0) break;
        else {
            switch (i) {
                case 1:
                    Button[index - i].style.backgroundColor = Colors[0];
                    break;
                case 2:
                    Button[index - i].style.backgroundColor = Colors[1];
                    break;
                default:
                    Button[index - i].style.backgroundColor = Colors[2];
                    break;
            }
        }
    }
    for (let i = 1; i < Button.length; i++) {
        if (index + i > Button.length - 1) break;
        else {
            switch (i) {
                case 1:
                    Button[index + i].style.backgroundColor = Colors[0];
                    break;
                case 2:
                    Button[index + i].style.backgroundColor = Colors[1];
                    break;
                default:
                    Button[index + i].style.backgroundColor = Colors[2];
                    break;
            }
        }
    }
}
function SetClass(elem, index, Class, addRem, hasIndex) {
    if (addRem === "add") {
        if (hasIndex) if (!elem[index].classList.contains(Class)) elem[index].classList.add(Class)
        if (!hasIndex) if (!elem.classList.contains(Class)) elem.classList.add(Class)
    }
    if (addRem === "Remove") {
        if (hasIndex) if (elem[index].classList.contains(Class)) elem[index].classList.remove(Class)
        if (!hasIndex) if (elem.classList.contains(Class)) elem.classList.remove(Class)
    }
}
/*Запрос Ответ*/
function sendForm(Form, [formPopup, thx], QS = false,) {
    const dataForm = new FormData(Form)
    let FormObj = {}
    dataForm.forEach((value, key) => {
        FormObj[key] = value;
    })
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.status == 200 && xhr.readyState === 4) {
            if (QS) {
                const question = document.querySelector(".question");
                const countQuestionElemnt = question.children.length;
                for (let i = 0; i < countQuestionElemnt; i++) {
                    question.firstElementChild.remove()

                }
                question.style.paddingLeft = "0px"
                question.insertAdjacentHTML("afterbegin", `<div class="general_thx">
            <h2>Спасибо!</h2>
        <p>Благодарим за ваш запрос. В ближайшее время <span>с вами свяжется наш специалист!</span></p>
        </div>`);
                sessionStorage.setItem("QuestComplite", "1");
            } else {
                formPopup.remove();
                SetClass(thx, -1, "active", "add", 0)
                sessionStorage.setItem("OdredCall", "1")
            }
        }
        if (xhr.status == 400 && xhr.readyState == 4) {
            if (QS) {
                document.querySelector(".question_body").style.display = "block";
                document.querySelector(".general_waiting").remove();
                if (xhr.responseText === "2") {
                    if (!questionFail) {
                        document.querySelector(".question_body_list").insertAdjacentHTML("beforeend", `<p class="question_body_list_fail">Вам нужно подтвердить согласие с политикой конфиденциальности!</p>`)
                        questionFail = document.querySelector(".question_body_list_fail");
                    }
                    else questionFail.innerHTML = "Вам нужно подтвердить согласие с политикой конфиденциальности!"
                } else if (xhr.responseText === "1") {
                    if (!questionFail) {
                        document.querySelector(".question_body_list").insertAdjacentHTML("beforeend", `<p class="question_body_list_fail">Пожалуйста, ответьте на все вопросы и заполните все поля!</p>`)
                        questionFail = document.querySelector(".question_body_list_fail");
                    }else questionFail.innerHTML = "Пожалуйста, ответьте на все вопросы и заполните все поля!"
                }
            }
            else {
                Form.style.display = "block"
                document.querySelector(".general_waiting").remove();
                if (xhr.responseText === "1") {
                    SetClass(Form._Name, -1, "active", "add", 0)
                    Form._Name.value = ""
                    Form._Name.placeholder = "Имя пожалуйста"
                    return
                }
                if (xhr.responseText === "2") {
                    SetClass(Form._Phone, -1, "active", "add", 0)
                    Form._Phone.value = ""
                    Form._Phone.placeholder = "Телефон(только цифры)"
                    return
                }
                if (xhr.responseText === "3") {
                        if (!SubFormFailPopUp) {
                            SubFormPopUp.insertAdjacentHTML("beforeend", `<p class="question_body_list_fail">Вам нужно подтвердить согласие с политикой конфиденциальности!</p>`)
                            SubFormFailPopUp = document.querySelector(".question_body_list_fail");
                        }
                        else SubFormFailPopUp.innerHTML = "Вам нужно подтвердить согласие с политикой конфиденциальности!"
                        return
                }
            }

        }
        if (xhr.status == 500 && xhr.readyState == 4) {
            if (QS) {
                document.querySelector(".question_body").style.display = "block";
                document.querySelector(".general_waiting").remove();
                if (!questionFail) {
                    document.querySelector(".question_body_list").insertAdjacentHTML("beforeend", `<p class="question_body_list_fail">${xhr.responseText}</p>`)
                    questionFail = document.querySelector(".question_body_list_fail");
                }
                else questionFail.innerHTML = `${xhr.responseText}`;
            }
            else {
                Form.style.display = "block"
                document.querySelector(".general_waiting").remove();
                    if (!SubFormFailPopUp) {
                        SubFormPopUp.insertAdjacentHTML("beforeend", `<p class="question_body_list_fail">${xhr.responseText}</p>`)
                        SubFormFailPopUp = document.querySelector(".question_body_list_fail");
                    }
                    else SubFormFailPopUp.innerHTML = `${xhr.responseText}`
                    return
            }
        }

    })
    let json = JSON.stringify(FormObj);
    QS ? xhr.open("POST", "/AnswerQs", true) : xhr.open("POST", "/OrderCall", true)
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhr.send(json)

}
/*//////////////*/
/*quesetion*/

if (!sessionStorage.getItem("QuestComplite")) {
    /*quest Cheked*/
    const sroItem = document.querySelectorAll(".question_body_item_form_sro.qsOne")
    const sroCheck = document.querySelectorAll(`input[name="QS_SRO"]`);
    sroItem.forEach((elem, index) => {
        elem.addEventListener("click", () => {
            SetClass(sroItem, LastElement.SroElement, "Checked", "Remove", 1)
            LastElement.SroElement = index;
            sroCheck[index].checked = true;
            elem.classList.add("Checked")
        })
    })
    const sumItem = document.querySelectorAll(".question_body_item_form_sro.qsTwo")
    const sumCheck = document.querySelectorAll(`input[name="QS_Sum"]`);
    sumItem.forEach((elem, index) => {
        elem.addEventListener("click", () => {
            SetClass(sumItem, LastElement.SumElement, "Checked", "Remove", 1)
            LastElement.SumElement = index;
            sumCheck[index].checked = true;
            elem.classList.add("Checked")
        })
    })
    const dangerItem = document.querySelectorAll(".question_body_item_form_sro.qsThree")
    const dangerCheck = document.querySelectorAll(`input[name="QS_Danger"]`);
    dangerItem.forEach((elem, index) => {
        elem.addEventListener("click", () => {
            SetClass(dangerItem, LastElement.DangerElenemt, "Checked", "Remove", 1)
            LastElement.DangerElenemt = index;
            dangerCheck[index].checked = true;
            elem.classList.add("Checked")
        })
    })

    /*question Prev Next*/
    const questPrev = document.querySelector(".question_body_Change_Prev");
    const questNext = document.querySelector(".question_body_Change_Next");
    var questionItemLine = document.querySelectorAll(".question_line_item")
    const questionCurrenPage = document.querySelector(".question_page_current")
    const questionItem = document.querySelectorAll(".question_body_item");
    const questionForm = document.querySelector(".question>form")
    const htmlLine = `<div class="line_top"></div>
<div class="line_bottom"></div>`
    questPrev.addEventListener("click", () => {
        if (LastElement.QsElement - 1 < 0) return;
        else {
            SetClass(questionItem, LastElement.QsElement, "active", "Remove", 1)
            SetClass(questionItemLine, LastElement.QsElement, "active", "Remove", 1)
            questionItemLine[LastElement.QsElement].innerHTML = ""
            --LastElement.QsElement;
            if (LastElement.QsElement === 0) questPrev.classList.remove("active");
            SetClass(questNext, -1, "active", "add", 0)
            questionItem[LastElement.QsElement].classList.add("active");
            questionCurrenPage.innerHTML = `${LastElement.QsElement + 1}`
            SwitchButtons(questionItemLine, LastElement.QsElement, colorsWhite)
            questionItemLine[LastElement.QsElement].innerHTML = htmlLine;
            questionItemLine[LastElement.QsElement].classList.add("active");
            if (window.screen.width!==window.innerWidth)
            {
                if (window.innerWidth > 730) {
                    document.querySelector(".line_top").style = `width:2px`
                    document.querySelector(".line_bottom").style = `width:2px`
                    document.querySelector(".line_top").style = `height:${questionItemLine[LastElement.QsElement].offsetTop}px`
                    document.querySelector(".line_bottom").style = `height:${question.offsetHeight - questionItemLine[LastElement.QsElement].offsetHeight - questionItemLine[LastElement.QsElement].offsetTop}px`
                } else {
                    document.querySelector(".line_top").style = `height:2px`
                    document.querySelector(".line_bottom").style = `height:2px`
                    document.querySelector(".line_top").style = `width:${questionItemLine[LastElement.QsElement].offsetLeft}px`
                    document.querySelector(".line_bottom").style = `width:${question.offsetWidth - questionItemLine[LastElement.QsElement].offsetWidth - questionItemLine[LastElement.QsElement].offsetLeft}px`
                }
            }else
            {
                if (window.screen.width > 730) {
                    document.querySelector(".line_top").style = `width:2px`
                    document.querySelector(".line_bottom").style = `width:2px`
                    document.querySelector(".line_top").style = `height:${questionItemLine[LastElement.QsElement].offsetTop}px`
                    document.querySelector(".line_bottom").style = `height:${question.offsetHeight - questionItemLine[LastElement.QsElement].offsetHeight - questionItemLine[LastElement.QsElement].offsetTop}px`
                } else {
                    document.querySelector(".line_top").style = `height:2px`
                    document.querySelector(".line_bottom").style = `height:2px`
                    document.querySelector(".line_top").style = `width:${questionItemLine[LastElement.QsElement].offsetLeft}px`
                    document.querySelector(".line_bottom").style = `width:${question.offsetWidth - questionItemLine[LastElement.QsElement].offsetWidth - questionItemLine[LastElement.QsElement].offsetLeft}px`
                }
            }
        }

    })
    questNext.addEventListener("click", () => {
        if (LastElement.QsElement + 1 > questionItem.length - 1) return;
        else {
            SetClass(questionItem, LastElement.QsElement, "active", "Remove", 1)
            SetClass(questionItemLine, LastElement.QsElement, "active", "Remove", 1)
            questionItemLine[LastElement.QsElement].innerHTML = ""
            ++LastElement.QsElement;
            if (LastElement.QsElement === questionItem.length - 1) questNext.classList.remove("active");
            SetClass(questPrev, -1, "active", "add", 0)
            questionItem[LastElement.QsElement].classList.add("active");
            questionCurrenPage.innerHTML = `${LastElement.QsElement + 1}`
            SwitchButtons(questionItemLine, LastElement.QsElement, colorsWhite)
            questionItemLine[LastElement.QsElement].innerHTML = htmlLine;
            questionItemLine[LastElement.QsElement].classList.add("active");
            if (window.screen.width!==window.innerWidth)
            {
                if (window.innerWidth > 730) {
                    document.querySelector(".line_top").style = `width:2px`
                    document.querySelector(".line_bottom").style = `width:2px`
                    document.querySelector(".line_top").style = `height:${questionItemLine[LastElement.QsElement].offsetTop}px`
                    document.querySelector(".line_bottom").style = `height:${question.offsetHeight - questionItemLine[LastElement.QsElement].offsetHeight - questionItemLine[LastElement.QsElement].offsetTop}px`
                } else {
                    document.querySelector(".line_top").style = `height:2px`
                    document.querySelector(".line_bottom").style = `height:2px`
                    document.querySelector(".line_top").style = `width:${questionItemLine[LastElement.QsElement].offsetLeft}px`
                    document.querySelector(".line_bottom").style = `width:${question.offsetWidth - questionItemLine[LastElement.QsElement].offsetWidth - questionItemLine[LastElement.QsElement].offsetLeft}px`
                }
            }else
            {
                if (window.screen.width > 730) {
                    document.querySelector(".line_top").style = `width:2px`
                    document.querySelector(".line_bottom").style = `width:2px`
                    document.querySelector(".line_top").style = `height:${questionItemLine[LastElement.QsElement].offsetTop}px`
                    document.querySelector(".line_bottom").style = `height:${question.offsetHeight - questionItemLine[LastElement.QsElement].offsetHeight - questionItemLine[LastElement.QsElement].offsetTop}px`
                } else {
                    document.querySelector(".line_top").style = `height:2px`
                    document.querySelector(".line_bottom").style = `height:2px`
                    document.querySelector(".line_top").style = `width:${questionItemLine[LastElement.QsElement].offsetLeft}px`
                    document.querySelector(".line_bottom").style = `width:${question.offsetWidth - questionItemLine[LastElement.QsElement].offsetWidth - questionItemLine[LastElement.QsElement].offsetLeft}px`
                }
            }
        }

    })
    /*quest send */
    const QuestionBoyList = document.querySelector(".question_body_list")
    const questionButtonSend = document.querySelector(".question_body_item_form>.Gen_Form>.Gen_Form_inputs>.BTN")
    const CityCheck = document.querySelector(`input[name="QS_City"]`);
    const nameCheck = document.querySelector(`input[name="QS_Name"]`);
    const PhoneCheck = document.querySelector(`input[name="QS_Phone"]`);
    const NoComplCheck = `<p class="question_body_list_fail">Пожалуйста, ответьте на все вопросы и заполните все поля!</p>`;
    function CheckQuestion(QsItemMassive) {
        for (let i = 0; i < QsItemMassive.length; i++) {
            for (let j = 0; j < QsItemMassive[i].length; j++) {
                if (QsItemMassive[i][j].checked && i === QsItemMassive.length - 1) {
                    return 1;
                } else
                    if (QsItemMassive[i][j].checked) {
                        break;
                    }

                if (!QsItemMassive[i][j].checked && j === QsItemMassive[i].length - 1) {
                    return 0;
                }
            }
        }
    }
    questionButtonSend.addEventListener("click", (event) => {
        event.preventDefault();
        if (!CheckQuestion([sroCheck, sumCheck, dangerCheck])) {
            if (!questionFail) {
                QuestionBoyList.insertAdjacentHTML("beforeend", NoComplCheck)
                questionFail = document.querySelector(".question_body_list_fail");
            }else questionFail.innerHTML = "Пожалуйста, ответьте на все вопросы и заполните все поля!"
            return;
        }
        if (!CityCheck.value) {
            SetClass(CityCheck, -1, "active", "add", 0)
            CityCheck.value = ""
            CityCheck.placeholder = "Какой Город,Район?"
            if (!questionFail) {
                QuestionBoyList.insertAdjacentHTML("beforeend", NoComplCheck)
                questionFail = document.querySelector(".question_body_list_fail");
            }else questionFail.innerHTML = "Пожалуйста, ответьте на все вопросы и заполните все поля!"
            return;
        }
        if (!/[A-Za-zА-Яа-яЁё]/.test(nameCheck.value)) {
            SetClass(nameCheck, -1, "active", "add", 0)
            nameCheck.value = ""
            nameCheck.placeholder = "Имя пожалуйста"
            if (!questionFail) {
                QuestionBoyList.insertAdjacentHTML("beforeend", NoComplCheck)
                questionFail = document.querySelector(".question_body_list_fail");
            }else questionFail.innerHTML = "Пожалуйста, ответьте на все вопросы и заполните все поля!"
            return
        }
        if (/[^0-9]/.test(PhoneCheck.value) || !PhoneCheck.value) {
            SetClass(PhoneCheck, -1, "active", "add", 0)
            PhoneCheck.value = ""
            PhoneCheck.placeholder = "Телефон(только цифры)"
            if (!questionFail) {
                QuestionBoyList.insertAdjacentHTML("beforeend", NoComplCheck)
                questionFail = document.querySelector(".question_body_list_fail");
            }else questionFail.innerHTML = "Пожалуйста, ответьте на все вопросы и заполните все поля!"
            return
        }
        if (!questionForm.QS_Political.checked) {
            if (!questionFail) {
                QuestionBoyList.insertAdjacentHTML("beforeend", `<p class="question_body_list_fail">Вам нужно подтвердить согласие с политикой конфиденциальности!</p>`)
                questionFail = document.querySelector(".question_body_list_fail");
            }
            else questionFail.innerHTML = "Вам нужно подтвердить согласие с политикой конфиденциальности!"
            return
        }
        document.querySelector(".question_body").style.display = "none"
        document.querySelector(".question_page").insertAdjacentHTML("afterend", HTMLLoaderPopUp)
        sendForm(questionForm, [], true);


    })
    CityCheck.addEventListener("focus", () => {
        SetClass(CityCheck, -1, "active", "Remove", 0)
    })
    nameCheck.addEventListener("focus", () => {
        SetClass(nameCheck, -1, "active", "Remove", 0)
    })
    PhoneCheck.addEventListener("focus", () => {
        SetClass(PhoneCheck, -1, "active", "Remove", 0)
    })
} else {
    const countQuestionElemnt = question.children.length;
    for (let i = 0; i < countQuestionElemnt; i++) {
        question.firstElementChild.remove()

    }
    document.querySelector(".question").style.paddingLeft = "0px"
    document.querySelector(".question").insertAdjacentHTML("afterbegin", `<div class="general_thx">
<h2>Спасибо!</h2>
<p>Благодарим за ваш запрос. В ближайшее время <span>с вами свяжется наш специалист!</span></p>
</div>`)
}

/*Checklist*/
const Checklist = document.querySelector(".Checklist");
const closeChecklist = document.querySelectorAll(".Checklist_close");
const BTNChecklist = document.querySelector(".Checklist_top_download>.BTN");
const BottomChecklist = document.querySelector(".Checklist_bottom_body")
const DownloadChecklist = () => {
    window.alert("Файл отсутствует");
}
closeChecklist.forEach((elem) => {
    elem.addEventListener("click", () => {
        SetClass(Checklist, -1, "active", "Remove", 0)
    })
})

BTNChecklist.addEventListener("click", DownloadChecklist)
BottomChecklist.addEventListener("click", DownloadChecklist)
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        SetClass(Checklist, -1, "active", "add", 0)
    }, 2000)
})
/*CallPopUp*/
const ShowPopup = document.querySelectorAll(".BTN.ShowPopUP");
const CallPopUp = document.querySelector('.CallPopup');
const CallPopUpBody = document.querySelector(".CallPopup_body");
const CallPopUpSend = document.querySelector(".BTN.popUP");
const CallPopupThx = document.querySelector(".CallPopup_thx");
const closePopUp = document.querySelectorAll(".CallPopup_body_close");
const closePopUpTextThx = document.querySelector(".CallPopup_thx_body>h3");
const FormPopUp = document.querySelector(".CallPopup_body_form");
const SubFormPopUp = document.querySelector(".CallPopup_body_form>.Gen_Form")
const SubFormPoliticalPopUp = document.querySelector(".CallPopup_body_form>.Gen_Form .Political_checked")
ShowPopup.forEach((elem) => {
    elem.addEventListener("click", () => {
        SetClass(CallPopUp, -1, "active", "add", 0)
        SetClass(document.body, -1, "Hide", "add", 0)
    })
})
if (sessionStorage.getItem("OdredCall")) {
    CallPopUpBody.remove()
    SetClass(CallPopupThx, -1, "active", "add", 0)
}else
{
    CallPopUpSend.addEventListener("click", (event) => {
        event.preventDefault();
        if (!/[A-Za-zА-Яа-яЁё]/.test(SubFormPopUp._Name.value)) {
            SetClass(SubFormPopUp._Name, -1, "active", "add", 0)
            SubFormPopUp._Name.value = ""
            SubFormPopUp._Name.placeholder = "Имя пожалуйста"
            return
        }
        if (/[^0-9]/.test(SubFormPopUp._Phone.value) || !SubFormPopUp._Phone.value) {
            SetClass(SubFormPopUp._Phone, -1, "active", "add", 0)
            SubFormPopUp._Phone.value = ""
            SubFormPopUp._Phone.placeholder = "Телефон(только цифры)"
            return
        }
        if (!SubFormPoliticalPopUp.checked) {
            if (!SubFormFailPopUp) {
                SubFormPopUp.insertAdjacentHTML("beforeend", `<p class="question_body_list_fail">Вам нужно подтвердить согласие с политикой конфиденциальности!</p>`)
                SubFormFailPopUp = document.querySelector(".question_body_list_fail");
            } else SubFormFailPopUp.innerHTML = "Вам нужно подтвердить согласие с политикой конфиденциальности!"
            return
    
        }
        SubFormPopUp.style.display = "none"
        FormPopUp.insertAdjacentHTML("beforeend", HTMLLoaderPopUp);
        sendForm(SubFormPopUp, [CallPopUpBody, CallPopupThx])
    })
}
closePopUp.forEach((elem) => {
    elem.addEventListener("click", () => {
        SetClass(CallPopUp, -1, "active", "Remove", 0)
        SetClass(document.body, -1, "Hide", "Remove", 0)
    })
})
closePopUpTextThx.addEventListener("click", () => {
    SetClass(CallPopUp, -1, "active", "Remove", 0)
    SetClass(document.body, -1, "Hide", "Remove", 0)

})
/*WidthScreen*/
function SetSizeSpace() {
    if (window.screen.width > 730) {
        if (!sessionStorage.getItem("QuestComplite")) {
            document.querySelector(".line_top").style = `width:2px`
            document.querySelector(".line_bottom").style = `width:2px`
            document.querySelector(".line_top").style = `height:${questionItemLine[LastElement.QsElement].offsetTop}px`
            document.querySelector(".line_bottom").style = `height:${document.querySelector(".question").offsetHeight - questionItemLine[LastElement.QsElement].offsetHeight - questionItemLine[LastElement.QsElement].offsetTop}px`
        }
    } else {
        if (!sessionStorage.getItem("QuestComplite")) {
            document.querySelector(".line_top").style = `height:2px`
            document.querySelector(".line_bottom").style = `height:2px`
            document.querySelector(".line_top").style = `width:${questionItemLine[LastElement.QsElement].offsetLeft}px`
            document.querySelector(".line_bottom").style = `width:${document.querySelector(".question").offsetWidth - questionItemLine[LastElement.QsElement].offsetWidth - questionItemLine[LastElement.QsElement].offsetLeft}px`
        }
    }
    if (window.screen.width < 610) {
        HeaderMobBurger.addEventListener("click", BurgerClickFN)
    } else {
        HeaderMobBurger.removeEventListener("click", BurgerClickFN)
    }
    if (window.screen.width < 1270) {
        for (let i = 0; i < BTN_Header.length; i++) {
            if (!BTN_Header[i].classList.contains("circle")) BTN_Header[i].classList.add("circle");

        }
    } else {
        for (let i = 0; i < BTN_Header.length; i++) {
            if (BTN_Header[i].classList.contains("circle")) BTN_Header[i].classList.remove("circle");

        }
    }
}
window.addEventListener("resize", () => {
    SetSizeSpace()
})
