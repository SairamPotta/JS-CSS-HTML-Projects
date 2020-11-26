document.addEventListener("mousemove", (e) => {
    const arr = [
        "C on fire.jpg",
        "J on fire.jpg",
        "M on fire.jpg",
        "O on fire.jpg",
        "R on fire.jpg",
        "Y on fire.jpg",
    ];
    let body = document.querySelector("body");
    let bubble = document.createElement("span");
    let x = e.offsetX;
    let y = e.offsetY;
    bubble.style.left = x + "px";
    bubble.style.top = y + "px";

    let imgNo = Math.floor(Math.random() * arr.length);
    let imageName = arr[imgNo];

    bubble.style.backgroundImage = `url('assets/${imageName}')`;
    bubble.style.backgroundSize = "cover";

    const size = Math.random() * 100;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    body.appendChild(bubble);
    setTimeout(() => {
        bubble.remove();
    }, 4000);
});
