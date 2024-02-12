function scrollToVideo() {
    const videoDiv = document.getElementsByClassName("video")[0];

    if (videoDiv) {
        videoDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });

       
        const videoIframe = videoDiv.querySelector('iframe');

      
        if (videoIframe && videoIframe.contentWindow) {
            videoIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }
    }
}

