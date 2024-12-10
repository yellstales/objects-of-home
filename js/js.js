const baseURL = 'object.html?id='

document.querySelector('span').addEventListener("click", function () {
    window.location.href = "#gallery";
});

document.querySelectorAll('.gallery a').forEach(anchor => addEventListener("click", function () {
    const id = parseInt(anchor.id);

    if (id >= 1 && id <= 20) {

        const generatedLink = `${baseURL}${id}`;
        anchor.href = generatedLink;
    }
}));
