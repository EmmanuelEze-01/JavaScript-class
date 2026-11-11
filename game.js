const myBox = document.getElementById("mybox"); // Find the HTML element that will move.

let x = 0; // Track the box's horizontal movement from its starting position.
let y = 0; // Track the box's vertical movement from its starting position.
const moveAmount = 100; // Move the box 100 pixels for each arrow-key press.
const initialPosition = myBox.getBoundingClientRect(); // Save the box's starting edges for boundary calculations.

function keepBoxInViewport() {
  const minX = -initialPosition.left; // Calculate the leftmost offset that keeps the box on screen.
  const maxX = document.documentElement.clientWidth - initialPosition.right; // Calculate the rightmost on-screen offset.
  const minY = -initialPosition.top; // Calculate the highest offset that keeps the box on screen.
  const maxY = document.documentElement.clientHeight - initialPosition.bottom; // Calculate the lowest on-screen offset.

  x = Math.min(Math.max(x, minX), maxX); // Keep the horizontal offset between its allowed limits.
  y = Math.min(Math.max(y, minY), maxY); // Keep the vertical offset between its allowed limits.
  myBox.style.left = `${x}px`; // Apply the horizontal offset to the box.
  myBox.style.top = `${y}px`; // Apply the vertical offset to the box.
}

// Change the box's face and color when any key is pressed.
document.addEventListener("keydown", () => {
  myBox.textContent = "😏"; // Show the pressed-key expression.
  myBox.style.backgroundColor = "tomato"; // Turn the box tomato-colored.
});

// Restore the box's appearance when a key is released.
document.addEventListener("keyup", (event) => {
  myBox.textContent = "😆"; // Show the released-key expression.
  myBox.style.backgroundColor = "white"; // Return the box to a white background.
});

// Move the box when an arrow key is pressed.
document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) { // Ignore keys that are not arrow keys for movement.
    event.preventDefault(); // Stop arrow keys from scrolling the page.
    switch (event.key) { // Choose the direction based on the pressed arrow key.
      case "ArrowUp":
        y -= moveAmount; // Move up by reducing the vertical offset.
        break;
      case "ArrowDown":
        y += moveAmount; // Move down by increasing the vertical offset.
        break;
      case "ArrowRight":
        x += moveAmount; // Move right by increasing the horizontal offset.
        break;
      case "ArrowLeft":
        x -= moveAmount; // Move left by reducing the horizontal offset.
        break;
    }
    keepBoxInViewport(); // Keep the updated position inside the viewport.
  }
});

window.addEventListener("resize", keepBoxInViewport); // Recheck the box's position when the window is resized.
