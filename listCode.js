const newProduct = JSON.parse(localStorage.getItem("newProduct"));

const productsList = [
    newProduct,
    { name: "Carro", value: 20},
    { name: "Mesa", value: 5}
];



window.onload = function() {
    productsList.sort((a, b) => a.value - b.value);

    /* testando
    localStorage.setItem("productsTest", JSON.stringify(productsList));
    const savedProducts = JSON.parse(localStorage.getItem("productsTest"));
    console.log(savedProducts);
    */

    productsList.forEach(object => {
        addNewProduct(object.name, object.value);
    });
};

function addNewProduct(name, value) {

    let productsTable = document.getElementById("productsTable");

    let newLine = document.createElement("tr");

    let element1 = document.createElement("td");
    element1.textContent = name;

    let element2 = document.createElement("td");
    element2.textContent = value; 

    newLine.appendChild(element1);
    newLine.appendChild(element2);

    productsTable.appendChild(newLine);
}