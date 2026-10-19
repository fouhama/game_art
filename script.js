function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        showToast("Code promo " + code + " copié !");
    }).catch(err => {
        console.error('Erreur lors de la copie: ', err);
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(() => { 
        toast.className = toast.className.replace("show", ""); 
    }, 3000);
}
