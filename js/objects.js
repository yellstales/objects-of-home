window.addEventListener("load", function () {
  fetch('../data/objects.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch JSON');
      }
      return response.json();
    })
    .then(data => {
      const urlParams = new URLSearchParams(window.location.search);
      const objectId = parseInt(urlParams.get('id'));
      const object = data.find(item => item.id === objectId);

      if (object) {
        const titleElement = document.querySelector('.object-title');
        titleElement.textContent = object.title;

        const imageElement = document.querySelector('.object img');
        imageElement.src = object.image;
        imageElement.alt = object.alt;

        if (object.spotifyUri) {
          window.onSpotifyIframeApiReady = (IFrameAPI) => {
            const element = document.getElementById('embed-iframe');
            const options = {
              width: '90%',
              height: '100',
              uri: object.spotifyUri
            };
            const callback = (EmbedController) => {
              console.log('Spotify Embed Loaded');
            };
            IFrameAPI.createController(element, options, callback);
          };
        }

        const descriptionElement = document.querySelector('.object-info > p');
        descriptionElement.textContent = object.description;
      } else {
        console.error('Object not found');
      }
    });
});


