const products = [
    {
        heading: 'Customize your drink',
        text : 'Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.',
        img: 'img/25.webp'
    },
    {
        heading: 'Brewed hot or iced coffee or tea, bakery item, packaged snack and more',
        text : 'Treat yourself to an iced coffee, buttery croissant, bag of chips and more.',
        img: 'img/125.webp'
    },
    {
        heading: 'Handcrafted drink (Cold Brew, lattes and more) or hot breakfast',
        text : 'Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.',
        img: 'img/225.webp'
    },
    {
        heading: 'Sandwich, protein box or at-home coffee',
        text : 'Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.',
        img: 'img/325.webp'
    },
    {
        heading: 'Select Starbucks® merchandise',
        text : 'Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.',
        img: 'img/425.webp'
    },
]
const selectionLi = document.querySelectorAll('#selection button');
const product = document.querySelector('#product');
change(0)
function change(arg){
    selectionLi.forEach((item, index) => {
        if(index != arg){
            item.classList.remove('border-b-[#00754a]');
            item.classList.remove('border-b-[4px]');
        }
        else{
            selectionLi[arg].classList.add('border-b-[#00754a]');
            selectionLi[arg].classList.add('border-b-[4px]');
        }
    });
    get(arg)
};
document.addEventListener('DOMContentLoaded', function() {AOS.init();});
function get(arg){
    product.innerHTML = `<div class="flex justify-center items-center gap-[30px] flex-col md:flex-row">
                    <img data-aos="zoom-in" style="width: 375px !important;" src="${products[arg].img}" alt="">
                    <div data-aos="zoom-in" class="max-w-[375px]">
                        <h3 class="font-semibold text-[24px] text-center">${products[arg].heading}</h3>
                        <p class="md:text-left text-center font-normal txt-[16px]">${products[arg].text}</p>
                    </div>
                </div>`
}