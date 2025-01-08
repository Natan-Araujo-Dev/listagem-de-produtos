let productsList = JSON.parse(localStorage.getItem("productsList")) || [];


window.onload = function() {

    const canAddItem = localStorage.getItem("canAddItem");
    if (canAddItem == "true") {

        const newProduct = JSON.parse(localStorage.getItem("newProduct"));

        productsList.push(newProduct);
        productsList.sort((a, b) => a.value - b.value);

        localStorage.setItem("productsList", JSON.stringify(productsList));
    }

    productsList.forEach(product => {
        addNewProduct(product.name, product.value);
    });

    localStorage.setItem("canAddItem", false);
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

document.getElementById("clearButton").addEventListener("click", function(deleteData){
    deleteData.preventDefault();

    localStorage.clear();
    window.location.href = "index.html";
});