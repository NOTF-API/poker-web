//本js文件用于测试后续开发的效果，不用于正式

// 屏幕倒计时测试
const timmer = document.querySelector(".time")
let t = 15;
setInterval(() => {
    timmer.innerText = t--;
    if (t < 0) {
        t = 15;
    }
}, 1000)


updatePosition();
updatePublicPosition();
addCardsEventListener();


// 给自己的牌添加点击事件用于切换状态(selected <-> ...)
function addCardsEventListener(){
    const playerCards = document.querySelector(".player-self").querySelector(".stacked").children
    for (let i = 0; i < playerCards.length; i++) {
        const item = playerCards[i]
        addSingleItemEventListener(item);
    }
}

function addSingleItemEventListener(item){
    item.addEventListener("click", (e) => {
        if (e.target.classList.contains("selected")) {
            e.target.classList.remove("selected")
        }else{
            e.target.classList.add("selected")
        }
        updatePosition();
    })
}

// 用于把牌堆叠排放
function updatePosition() {
    const playerCards = document.querySelector(".player-self").querySelector(".stacked").children
    for (let i = 0; i < playerCards.length; i++) {
        const item = playerCards[i]
        let xoffset = i * 2 - (playerCards.length-1);
        let yoffset = item.classList.contains("selected") ? -1 : 0
        item.style.transform = `translate(${xoffset}rem,${yoffset}rem)`
    }
}

// 用于把公共堆叠排放
function updatePublicPosition() {
    const el = document.querySelector(".public").querySelector(".stacked")
    if(el===null)return
    const playerCards = el.children
    for (let i = 0; i < playerCards.length; i++) {
        const item = playerCards[i]
        let xoffset = i * 2 - (playerCards.length-1);
        let yoffset = 0
        item.style.transform = `translate(${xoffset}rem,${yoffset}rem)`
    }
}

document.querySelectorAll("div").forEach(el=>{
    // el.style.border="1px solid black"
})

document.querySelector(".idea").addEventListener("click",()=>{
    const child = document.createElement("div");
    child.className="normal heart card"
    child.innerText="X"
    addSingleItemEventListener(child)
    document.querySelector(".player-self").querySelector(".stacked").appendChild(child)
    updatePosition();
})