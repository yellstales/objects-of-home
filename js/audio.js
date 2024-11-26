window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
        width: '90%',
        height: '100',
        uri: 'spotify:track:0Jay9BduJRL8l4jZ6I8vkN'
    };
    const callback = (EmbedController) => { };
    IFrameAPI.createController(element, options, callback);
};


