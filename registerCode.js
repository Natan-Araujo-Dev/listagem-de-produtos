let newProduct;
let newProductName, newProductValue;

const btn_send = document.getElementById("sendButton");



btn_send.addEventListener("click", function(uploadValue){
    uploadValue.preventDefault();
    
    newProduct = {
        name: document.getElementById("productName").value,
        value: Number(document.getElementById("productValue").value),
    };

    localStorage.setItem("newProduct", JSON.stringify(newProduct));

    setTimeout(() => {
        window.location.href = "list.html";
      }, 1000);
      //alert("Sendo redirecionado!"); //alterar isso
});