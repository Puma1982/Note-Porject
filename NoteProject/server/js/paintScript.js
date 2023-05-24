const canvas = document.querySelector("canvas"), 
//<canvas>` element found in the HTML document using the `querySelector` method.
toolBtns = document.querySelectorAll(".tool"),  
//stores all elements with the class "tool" in a NodeList. It uses the `querySelectorAll` method.
fillColor = document.querySelector("#fill-color"), 
//selects and stores the element with the ID "fill-color" in a variable named `fillColor`.
sizeSlider = document.querySelector("#size-slider"),
//selects and stores the element with the ID "size-slider" in a variable named `sizeSlider`.
colorBtns = document.querySelectorAll(".colors .option"),
//selects and stores all elements with the class "option" within the "colors" class in a NodeList. It uses the `querySelectorAll` method
colorPicker = document.querySelector("#picker"),
//selects and stores the element with the ID "color-picker" in a variable named `colorPicker`.
clearCanvas = document.querySelector(".clear-canvas"),
//selects and stores the element with the class "clear-canvas" in a variable named `clearCanvas`.
saveImg = document.querySelector(".save-img"),
//selects and stores the element with the class "save-img" in a variable named `saveImg`.
ctx = canvas.getContext("2d");
//accesses the 2D rendering context of the canvas element and stores it in a variable named `ctx`. The 2D context allows for drawing and manipulating the canvas content.



//definetion Canvas Background 
function setCanvasBackground(color) {
  canvas.style.background = color;
}





// global variables with default value
let prevMouseX, prevMouseY, snapshot,     // `prevMouseX` and `prevMouseY`: These variables will store the previous mouse coordinates when drawing on the canvas. They are used to track the movement of the mouse for drawing lines or shapes.
// `snapshot`: This variable can be used to store a snapshot of the canvas at a specific point in time. It might be used, for example, to save a state of the canvas before applying transformations or to undo/redo changes.
isDrawing = false,
//`isDrawing`: This boolean variable indicates whether the user is currently drawing on the canvas. It is initially set to `false` and will be updated based on user actions.
selectedTool = "brush",
//This variable stores the currently selected tool for drawing. It is initially set to "brush" and can be changed to other values depending on the available tools.
brushWidth = 1,
//initially set to 1 pixel
selectedColor = "#696969";

/*const setCanvasBackground = () => {
    // Canvas background white.
    ctx.fillStyle = "#fff";
    ctx.fillRect(10, 10, canvas.width, canvas.height);
    ctx.fillStyle = selectedColor; // setting fillstyle back to the selectedColor, it'll be the brush color
}
*/
window.addEventListener("load", () => {
    // setting canvas width/height.. offsetwidth/height returns viewable width/height of an element
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCanvasBackground();
});

const drawRect = (e) => {
    // if fillColor isn't checked draw a rect with border else draw rect with background
    if(!fillColor.checked) {
        // creating circle according to the mouse pointer
        return ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
    }
    ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
}

//Draw circle
const drawCircle = (e) => {
    ctx.beginPath(); //When We drawing circil we creat new path
    // getting radius for circle according to the mouse pointer
    let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2));
    ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI); // creating circle according to the mouse pointer
    fillColor.checked ? ctx.fill() : ctx.stroke(); // if fillColor is checked fill circle else draw border circle
}
//text

/*const text = (e) => {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  // Set the font style and size
  ctx.font = "20px Arial";

  // Set the text color
  ctx.fillStyle = "black";

  // Set the text alignment (optional)
  ctx.textAlign = "center";

  // Set the baseline alignment (optional)
  ctx.textBaseline = "middle";

  // Get the position of the mouse click
  const x = e.clientX - canvas.offsetLeft;
  const y = e.clientY - canvas.offsetTop;

  // Prompt the user for input
  const userInput = prompt("Enter a letter:");

  // Write the user input on the canvas
  ctx.fillText(userInput, x, y);
};
*/














// Usage example
canvas.addEventListener("click", text);



//Draw ellipse
const drawEllipse = (e) => {
    ctx.beginPath();
    let radiusX = Math.abs(e.offsetX - prevMouseX);
    let radiusY = Math.abs(e.offsetY - prevMouseY);
    let centerX = (e.offsetX + prevMouseX) / 2;
    let centerY = (e.offsetY + prevMouseY) / 2;
    ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
    fillColor.checked ? ctx.fill() : ctx.stroke();
  };
  
  const draw = (e) => {
    if (!isDrawing) return;
  
    ctx.putImageData(snapshot, 0, 0);
  
    if (selectedTool === "brush" || selectedTool === "eraser") {
      ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    } else if (selectedTool === "rectangle") {
      drawRect(e);
    } else if (selectedTool === "circle") {
      drawCircle(e);
    } else if (selectedTool === "ellipse") {
      drawEllipse(e);
    } else if (selectedTool === "triangle") {
      drawTriangle(e);
    } else if (selectedTool === "line") {
      ctx.strokeStyle = selectedColor;
      ctx.beginPath();
      ctx.moveTo(prevMouseX, prevMouseY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    }
  };
  
  

//Draw Triange
const drawTriangle = (e) => {
    ctx.beginPath(); // creating new path to draw circle
    ctx.moveTo(prevMouseX, prevMouseY); // moving triangle to the mouse pointer
    ctx.lineTo(e.offsetX, e.offsetY); // creating first line according to the mouse pointer
    ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY); // creating bottom line of triangle
    ctx.closePath(); // closing path of a triangle so the third line draw automatically
    fillColor.checked ? ctx.fill() : ctx.stroke(); // if fillColor is checked fill triangle else draw border
}


//Line
const drawLine = (e) => {
    ctx.beginPath(); // Start a new path
    ctx.moveTo(prevMouseX, prevMouseY); // Move to the starting point
    ctx.lineTo(e.offsetX, e.offsetY); // Draw a line to the current mouse position
    ctx.stroke(); // Stroke the line to make it visible
  };
  

//Start Drawing Pass current mouse x and y
const startDraw = (e) => {
    isDrawing = true;
    prevMouseX = e.offsetX; // passing current mouseX position as prevMouseX value
    prevMouseY = e.offsetY; // passing current mouseY position as prevMouseY value
    ctx.beginPath(); // creating new path to draw
    ctx.lineWidth = brushWidth; // passing brushSize as line width
    ctx.strokeStyle = selectedColor; // passing selectedColor as stroke style
    ctx.fillStyle = selectedColor; // passing selectedColor as fill style
    // copying canvas data & passing as snapshot value.. this avoids dragging the image
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
}



const drawing = (e) => {   //(e) is a parameter of the drawing function. Event
    if (!isDrawing) return; // If isDrawing is false, return from the function
    ctx.putImageData(snapshot, 0, 0); // Restore the copied canvas data
  
    if (selectedTool === "brush" || selectedTool === "eraser") {
      ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;
      ctx.lineTo(e.offsetX, e.offsetY); // Create a line according to the mouse pointer
      ctx.stroke(); // Draw the line
    } else if (selectedTool === "rectangle") {
      drawRect(e);
    } else if (selectedTool === "circle") {
      drawCircle(e);
    } else if (selectedTool === "ellipse") 
    { drawEllipse(e);
    } else if (selectedTool === "triangle") {
      drawTriangle(e);
    } else if (selectedTool === "line") {
      ctx.strokeStyle = selectedColor;
      ctx.beginPath();
      ctx.moveTo(prevMouseX, prevMouseY); // Move to the starting point
      ctx.lineTo(e.offsetX, e.offsetY); // Draw a line to the current mouse position
      ctx.stroke(); // Stroke the line
    }
  };
  



toolBtns.forEach(btn => {
    btn.addEventListener("click", () => { // adding click event to all tool option
        // removing active class from the previous option and adding on current clicked option
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
    });
});

sizeSlider.addEventListener("change", () => brushWidth = sizeSlider.value); // passing slider value as brushSize

colorBtns.forEach(btn => {
    btn.addEventListener("click", () => { // adding click event to all color button
        // removing selected class from the previous option and adding on current clicked option
        document.querySelector(".options .selected").classList.remove("selected");
        btn.classList.add("selected");
        // passing selected btn background color as selectedColor value
        selectedColor = window.getComputedStyle(btn).getPropertyValue("background-color");
    });
});

colorPicker.addEventListener("change", () => {
    // passing picked color value from color picker to last color btn background
    colorPicker.parentElement.style.background = colorPicker.value;
    colorPicker.parentElement.click();
});

clearCanvas.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing whole canvas
    setCanvasBackground();
});

saveImg.addEventListener("click", () => {
    const link = document.createElement("a"); // creating <a> element
    link.download = `${Date.now()}.jpg`; // passing current date as link download value
    link.href = canvas.toDataURL(); // passing canvasData as link href value
    link.click(); // clicking link to download image
});

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => isDrawing = false);




/**The Pythagorean theorem a2+b2=c2
let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2))
 * ;: This line calculates the radius of the circle based on the distance between the
 *  previous mouse position (prevMouseX and prevMouseY) and the current mouse position (e.offsetX and e.offsetY). It uses the Pythagorean theorem to calculate the distance between two points. **/