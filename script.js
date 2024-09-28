let lastColorIndex = -1;

function changeBackgroundColor() {
    const colors = ['#ff6f61', '#6b5b95', '#88b04b', '#f7cac9', '#92a8d1','a79fe6907ae906f52f12834a2cd4851f'];
    let randomColorIndex;

    // Ensure the new color is different from the previous one
    do {
        randomColorIndex = Math.floor(Math.random() * colors.length);
    } while (randomColorIndex === lastColorIndex);

    // Apply the new color
    document.body.style.backgroundColor = colors[randomColorIndex];

    // Update the last color index
    lastColorIndex = randomColorIndex;
}
