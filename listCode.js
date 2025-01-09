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
        addNewProduct(product.name, product.value, product.description);
    });

    localStorage.setItem("canAddItem", false);
};

function addNewProduct(name, value, description) {

    let productsTable = document.getElementById("productsTable");

    let newLine = document.createElement("tr");
    let descriptionLine = document.createElement("tr");

    let cellName = document.createElement("td");
    cellName.textContent = name;
    newLine.appendChild(cellName);

    let cellValue = document.createElement("td");
    cellValue.textContent = value;
    newLine.appendChild(cellValue);

    let cellDescription = document.createElement("td");
    cellDescription.textContent = description;
    descriptionLine.appendChild(cellDescription);
    cellDescription.setAttribute("colspan", "2");

    productsTable.appendChild(newLine);
    productsTable.appendChild(descriptionLine);
}

document.getElementById("clearButton").addEventListener("click", function(deleteData){
    deleteData.preventDefault();

    localStorage.clear();
    window.location.href = "index.html";
});
//alteração