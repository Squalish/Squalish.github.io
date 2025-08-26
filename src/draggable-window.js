const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice()) {
    const makeDraggable = (draggableElement, handleElement) => {
        let offsetX = 0, offsetY = 0, startX = 0, startY = 0;

        const clampPosition = (x, y) => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const windowWidth = draggableElement.offsetWidth;
            const windowHeight = draggableElement.offsetHeight;

            const clampedX = Math.min(
                Math.max(x, windowWidth / 2),
                viewportWidth - windowWidth / 2
            );
            const clampedY = Math.min(
                Math.max(y, windowHeight / 2),
                viewportHeight - windowHeight / 2
            );

            draggableElement.style.left = `${clampedX}px`;
            draggableElement.style.top = `${clampedY}px`;
        }

        handleElement.onmousedown = (e) => {
            e.preventDefault();

            startX = e.clientX;
            startY = e.clientY;
            offsetX = draggableElement.offsetLeft;
            offsetY = draggableElement.offsetTop;

            document.onmousemove = dragElement;
            document.onmouseup = stopDragElement;
        };

        const dragElement = (e) => {
            e.preventDefault();

            const newX = offsetX + (e.clientX - startX);
            const newY = offsetY + (e.clientY - startY);

            clampPosition(newX, newY);
        };

        const stopDragElement = () => {
            document.onmousemove = null;
            document.onmouseup = null;
        };
        
        // clamp on browser resize
        window.addEventListener('resize', () => {
            clampPosition(draggableElement.offsetLeft, draggableElement.offsetTop);
        });
    };

    const windows = document.querySelectorAll(".main-content");

    windows.forEach(windowElement => {
        const titleBar = windowElement.querySelector(".title-bar");
        if (titleBar) makeDraggable(windowElement, titleBar);
    });
} else {
    console.log("Draggable feature disabled on touch devices.");
}
