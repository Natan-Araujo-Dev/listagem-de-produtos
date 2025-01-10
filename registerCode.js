let newProduct;
let newProductName, newProductValue, newProductDisponibility, newProductDescription, newProductImage;

const btn_send = document.getElementById("sendButton");



btn_send.addEventListener("click", function(uploadValue){
    uploadValue.preventDefault();

    const newProductName = document.getElementById("productName").value;
    const newProductValue = Number(document.getElementById("productValue").value);
    const newProductDisponibility = document.getElementById("productDisponibility").value;
    const newProductDescription = document.getElementById("productDescription").value;

    if (newProductName == "") {
        alert("Prezado cliente,\no produto necessita de um nome.\nPor favor, insira o nome do seu produto antes de enviar.");
    } else if (newProductValue == 0) {
        alert("Prezado cliente,\no produto não pode estar de graça nem ter valor negativo.\nPor favor, insira um valor acima de R$0.");
    } else if (newProductImage == null) {
        alert("Prezado cliente,\no produto necessita de uma foto.\nPor favor, insira uma foto.");
    } else if (newProductDescription == "") {
        alert("Prezado cliente,\no produto necessita de uma descrição.\nPor favor, insira uma descrição.");
    }
    else {
        localStorage.setItem("canAddItem", true);
        
        newProduct = {
            name: newProductName,
            value: newProductValue,
            disponibility: newProductDisponibility,
            description: newProductDescription,
            image: newProductImage,
        };
    
        localStorage.setItem("newProduct", JSON.stringify(newProduct));
    
        setTimeout(() => {
            window.location.href = "list.html";
        }, 1000);
    }
});

//é chamado no index.html
function getImage(event) {
    const file = event.target.files[0];
    
    //"* 1024" pq é em kb
    if (file.size > 500 * 1024) {
        alert("Prezado cliente,\nA imagem não pode ser maior que 500Kb.\nPor favor, insira uma menor.\n\nDica: Existem sites que reduzem o tamanho de uma imagem pela internet,\nnós recomendamos o uso de um deles nesses casos.");
    } else if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            newProductImage = e.target.result;
            changeImage();
        };

        reader.readAsDataURL(file);
    }
}

function changeImage() {
    let productImageRegister = document.getElementById("registerImage");

    if (!newProductImage.startsWith("data:image/")) {
        productImageRegister.src = `data:image/png;base64,${newProductImage}`;
    } else {
        productImageRegister.src = newProductImage;
    }
}