const baseURL = 'object.html?id='

document.querySelectorAll('a').forEach(anchor => addEventListener("click", function () {
    const id = parseInt(anchor.id);
    
    if (id >= 1 && id <= 20) {
        anchor.href = `${baseURL}${id}`;
        window.location.href = generatedLink;
    }
}));
