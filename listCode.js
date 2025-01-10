let productsList = JSON.parse(localStorage.getItem("productsList")) || [];


window.onload = function() {

    const canAddItem = localStorage.getItem("canAddItem");
    console.log(canAddItem);
    if (canAddItem == "true") {

        const newProduct = JSON.parse(localStorage.getItem("newProduct"));

        productsList.push(newProduct);
        productsList.sort((a, b) => a.value - b.value);

        localStorage.setItem("productsList", JSON.stringify(productsList));
    }

    productsList.forEach(product => {
        addNewCard(product.name, product.value, product.disponibility, product.description, product.image);
    });

    localStorage.setItem("canAddItem", false);
};

function addNewCard(name, value, disponibility, description, image) {

    //tabela
    let productsTable = document.createElement("table");  document.getElementById("tableContainer").appendChild(productsTable); 
    productsTable.classList.add("productCard");

    //linhas
    let mainLine = document.createElement("tr"); let descriptionLine = document.createElement("tr");

    //celulas principais
    let cellName = document.createElement("td"); cellName.textContent = name; mainLine.appendChild(cellName);
    cellName.classList.add("productName");

    let cellValue = document.createElement("td");
    cellValue.innerHTML = `<h2>R$</h2> <p>${value}</p><br>(${disponibility})`;
    
    mainLine.appendChild(cellValue);
    cellValue.classList.add("productValue");

    //celulas auxiliares
    let cellImage = document.createElement("td"); const cardImage = document.createElement("img");

    if (!image.startsWith("data:image/")) {
        cardImage.src = `data:image/png;base64,${image}`;
    } else {
        cardImage.src = image;
    }
    cardImage.classList.add("productImage");
    
    cellImage.appendChild(cardImage); descriptionLine.appendChild(cellImage);

    let cellDescription = document.createElement("td"); cellDescription.textContent = description; descriptionLine.appendChild(cellDescription);
    productsTable.appendChild(mainLine); productsTable.appendChild(descriptionLine);
    cellDescription.classList.add("productDescription");
}

document.getElementById("clearButton").addEventListener("click", function(deleteData) {
    deleteData.preventDefault();

    const keepCanAddItem = localStorage.getItem("canAddItem");
    localStorage.clear();
    localStorage.setItem("canAddItem", keepCanAddItem);

    window.location.href = "index.html";
});