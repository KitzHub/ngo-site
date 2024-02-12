function scrollAndPlayVideo() {
    //get element
    const videoElement = document.querySelector('.video iframe');
    if (videoElement) {
        //get the parent element of the video
        const videoContainer = videoElement.parentElement;

        //Offset is tlike the position (The OR sign means assign (0,0))
        const scrollOffset = videoContainer?.offsetTop || 0;
        //Scroll to is an event or method from the window  object(JS is powerful that it communicates with the window u are)
        window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
    }
}
