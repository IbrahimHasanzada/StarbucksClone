let items = []
fetch("https://raw.githubusercontent.com/zahid022/json/main/starbucks.json")
.then(res => res.json())
.then(data => {
    items = data
    showItems()
    menuListItemClick()
})


const url = new URLSearchParams(window.location.search);
const id = url.get("id")
const menuList = document.getElementById('itemsList')
const showCards = document.getElementById('showCards')
const nameItem = document.getElementById('nameItem')
const productCategories = document.getElementById('productCategories')

function menuListItemClick() {
    menuList.innerHTML = ''
    let kod = ''

    items.forEach(menu => {
        let list = '<ul class="flex flex-col gap-4 mt-3 text-[#00000094] font-medium text-sm">'
        menu.children.forEach(item => {
            list += `
                <li><a href="item.html?id=${item.id}">${item.name}</a></li>
            `
        })
        list += '</ul>'
        let name = `
            <h2 class="font-semibold text-lg">${menu.name}</h2>
        `
        kod += `
            <div class="menu-item flex flex-col gap-4 mt-4">
                ${name}
                ${list}
            </div>
        `
    })
    menuList.innerHTML = kod
}


function showItems(){
    let kod = '';
    
    items.forEach(item => {
        let products = item.children.filter(elem => elem.id == id);
        products.forEach(product => {
            let content = '';
            
            product.children.forEach(child => {
                let imageAndText = '';

                // I M A G E S and  T E X T
                child.products.forEach(img => {
                    imageAndText += `
                        <div  class="flex flex-col items-center content">
                            <img class="rounded-full " style="border-radius:50%;" src="${img.assets.masterImage.uri}" alt="${img.name}">
                            <p class="font-bold text-center">${img.name}</p>
                        </div>
                    `;
                });

                content += `
                    <div class="flex flex-col mb-8 gap-5 px-4">
                        <h2 class="mb-4 font-bold text-3xl">${child.name}</h2>
                        <hr class="pb-8" />
                        <div class="cardsItem" class="flex flex-wrap">
                            ${imageAndText}
                        </div>
                    </div>
                `;
            });
            
            kod += `<div class="flex flex-col">${content}</div>`;
            nameItem.innerHTML = product.name
            productCategories.innerHTML = product.name
        });
    });
    
    showCards.innerHTML += kod
}
