let menu = []
fetch("https://raw.githubusercontent.com/zahid022/json/main/starbucks.json")
.then(res => res.json())
.then(data => {
    menu = data
    menuListItemClick()
    menuListCards()
})

const menuList = document.getElementById('menuList')
const menuCardsSection = document.getElementById('menuCardsSection')
function menuListItemClick() {
    menuList.innerHTML = ''
    let kod = ''
    menu.forEach(menu => {
        let list = '<ul class="flex flex-col gap-4 mt-3 text-[#00000094] font-medium text-sm">'
        menu.children.forEach(item => {
            list += `<li><a href="item.html?id=${item.id}">${item.name}</a></li>`
        })
        list += '</ul>'
        let name = `<h2 class="font-semibold text-lg">${menu.name}</h2>`
        kod += `<div class="menu-item flex flex-col gap-4 mt-4">
                ${name}
                ${list}</div>`
    })
    menuList.innerHTML = kod
}
function menuListCards(){
    let kod = '';
    menu.forEach(item => {
        let name = `<h2 class="font-bold text-2xl pb-4 ">${item.name}</h2>`;
        let itemContent = '';
        item.children.forEach(child => {
            let image = '';
            if (child.children.length > 0 && child.children[0].products.length > 0) {
                let img = child.children[0].products[0].assets.masterImage.uri;
                image = `<img class="images" width="100px" style="border-radius: 50%;" src="${img}" alt="">`;
            } else if (child.children.length == 0 && child.products.length > 0) {
                let img = child.products[0].assets.masterImage.uri;
                image = `<img class="images" width="100px !important" style="border-radius: 50%;" src="${img}" alt="">`;
            }
            itemContent += 
            `<a href=item.html?id=${child.id}>
                <div class="products flex items-center gap-4 "  >
                    <div class="w-14 md:w-24">${image}</div>
                    <h3 class="font-medium md:text-xl text-base ml-5">${child.name}</h3>
                </div>
            </a>`;
        });
            kod +=  
            `<div style="margin-top: 50px;" >
                ${name}
                <hr class="my-4" />
                <div style=" display:flex;  flex-wrap: wrap !important; gap: 50px;">
                ${itemContent}
                </div>
            </div>`;
    });
    menuCardsSection.innerHTML = kod;
}
