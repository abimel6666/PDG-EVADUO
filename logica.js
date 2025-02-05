document.getElementById("evaluationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    fetch("https://script.google.com/macros/s/", { //Meliu, vuelve a copiar tu url del appscript 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
    })
    .then(data => alert(data))
    .catch(error => console.error("Error en la solicitud fetch:", error)); 
});

/*PROXY CORS*/

/*
document.getElementById("evaluationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    fetch("https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbwfSAikXBxC_O7bt2DvzZ_TcsmtqIfC9vEyqjCLCAN8Xq61F3e_cinOV5c729AjV0yU2w/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error("Error en la solicitud fetch:", error));
});

*/


/* SIN CORS*/
/*
document.getElementById("evaluationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    fetch("https://script.google.com/macros/s/AKfycbwfSAikXBxC_O7bt2DvzZ_TcsmtqIfC9vEyqjCLCAN8Xq61F3e_cinOV5c729AjV0yU2w/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        mode: 'no-cors'
    })
    .then(() => alert("Solicitud enviada"))
    .catch(error => console.error("Error en la solicitud fetch:", error));
});
*/