
const list = document.querySelector('.list');
const boots = {

    1: {
        "name": 'Boots High',
        "price": '150'
    },
    2: {
        "name": 'Boots Low',
        "price": '200'
    },
    3: {
        "name": 'Boots New',
        "price": '165'
    },
    4: {
        "name": 'Boots Old',
        "price": '50'
    }
}
let item = [];
let bill = [];

function addToCart(x) {
    const span = `<span class="price">$${boots[x].price}</span>`
    const result = boots[x].name + " " + span;
    if (item.includes(boots[x]) === false) item.push(result);
    bill.push(boots[x].price);

}

function cart() {
    list.innerHTML = "";
    for (let i = 0; i < item.length; i++) {
        let text = item[i];
        let listItem = document.createElement("LI");
        listItem.innerHTML = text;
        list.appendChild(listItem);
        listItem.style.textAlign = 'left';
    }
    const btn = document.querySelector('.bill');
    const total = bill.reduce(add);

    function add(accumulator, a) {
        return parseInt(accumulator) + parseInt(a);
    }
    console.log(total);
    btn.innerHTML = `Total: $${total}`;
}