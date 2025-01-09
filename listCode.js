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
        addNewCard(product.name, product.value, product.description, product.image);
    });

    localStorage.setItem("canAddItem", false);
};

function addNewCard(name, value, description, image) {

    //tabela
    let productsTable = document.getElementById("productsTable"); 

    //linhas
    let mainLine = document.createElement("tr"); let descriptionLine = document.createElement("tr");

    //celulas principais
    let cellName = document.createElement("td"); cellName.textContent = name; mainLine.appendChild(cellName);
    let cellValue = document.createElement("td"); cellValue.textContent = value; mainLine.appendChild(cellValue);

    //celulas auxiliares
    let cellImage = document.createElement("td"); const cardImage = document.createElement("img");

    if (!image.startsWith("data:image/")) {
        cardImage.src = `data:image/png;base64,${image}`;
    } else {
        cardImage.src = image;
    }
    cardImage.classList.add("cardImage");
    
    cellImage.appendChild(cardImage); descriptionLine.appendChild(cellImage);

    let cellDescription = document.createElement("td"); cellDescription.textContent = description; descriptionLine.appendChild(cellDescription); //cellDescription.setAttribute("colspan", "2");

    productsTable.appendChild(mainLine); productsTable.appendChild(descriptionLine);
}

document.getElementById("clearButton").addEventListener("click", function(deleteData){
    deleteData.preventDefault();

    localStorage.clear();
    window.location.href = "index.html";
});