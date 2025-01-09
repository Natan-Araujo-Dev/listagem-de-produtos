let newProduct;
let newProductName, newProductValue, newProductDisponibility, newProductDescription;

const btn_send = document.getElementById("sendButton");



btn_send.addEventListener("click", function(uploadValue){
    uploadValue.preventDefault();

    const newProductName = document.getElementById("productName").value;
    const newProductValue = Number(document.getElementById("productValue").value);
    const newProductDisponibility = document.getElementById("productDisponibility").value;
    const newProductDescription = document.getElementById("productDescription").value;

    if (newProductName == "") {
        alert("Prezado cliente,\ninsira o nome do seu produto antes de enviar.");
    } else if (newProductValue == 0) {
        alert("Prezado cliente,\no produto não pode estar de graça. Insira um valor acima de R$0.");
    } else if (newProductValue < 0) {
        alert("Prezado cliente,\no produto não pode ter valor negativo. Insira um valor acima de R$0.");
    }
    else {
        localStorage.setItem("canAddItem", true);
        
        newProduct = {
            name: newProductName,
            value: newProductValue,
            disponibility: newProductDisponibility,
            description: newProductDescription,
        };
    
        localStorage.setItem("newProduct", JSON.stringify(newProduct));
    
        setTimeout(() => {
            window.location.href = "list.html";
        }, 1000);
    }
});