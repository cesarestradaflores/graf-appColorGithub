// Sliders
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const azul = document.getElementById("azul");

// Inputs numéricos
const rojoInput = document.getElementById("rojoInput");
const verdeInput = document.getElementById("verdeInput");
const azulInput = document.getElementById("azulInput");

// Color picker
const colorPicker = document.getElementById("colorPicker");

// Otros elementos
const colorBox = document.getElementById("colorBox");
const rgbCode = document.getElementById("rgbCode");
const hexCode = document.getElementById("hexCode");

// Función para convertir HEX a RGB
function hexToRgb(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
}

// Función para actualizar el color desde sliders/inputs
function actualizarColor() {
  let r = parseInt(rojo.value);
  let g = parseInt(verde.value);
  let b = parseInt(azul.value);

  // Sincronizar sliders con inputs
  rojoInput.value = r;
  verdeInput.value = g;
  azulInput.value = b;

  // Código RGB
  let rgb = `rgb(${r}, ${g}, ${b})`;
  colorBox.style.backgroundColor = rgb;
  rgbCode.textContent = rgb;

  // Código HEX
  let hex = "#" +
            r.toString(16).padStart(2, "0") +
            g.toString(16).padStart(2, "0") +
            b.toString(16).padStart(2, "0");
  hexCode.textContent = hex.toUpperCase();

  // Actualizar colorPicker
  colorPicker.value = hex.toUpperCase();
}

// Función para actualizar desde inputs numéricos
function actualizarDesdeInput() {
  let r = Math.min(255, Math.max(0, parseInt(rojoInput.value) || 0));
  let g = Math.min(255, Math.max(0, parseInt(verdeInput.value) || 0));
  let b = Math.min(255, Math.max(0, parseInt(azulInput.value) || 0));

  // Sincronizar inputs con sliders
  rojo.value = r;
  verde.value = g;
  azul.value = b;

  actualizarColor();
}

// Función para actualizar desde color picker
function actualizarDesdePicker() {
  let { r, g, b } = hexToRgb(colorPicker.value);

  // Sincronizar con sliders e inputs
  rojo.value = r;
  verde.value = g;
  azul.value = b;

  rojoInput.value = r;
  verdeInput.value = g;
  azulInput.value = b;

  actualizarColor();
}

// Eventos sliders
rojo.addEventListener("input", actualizarColor);
verde.addEventListener("input", actualizarColor);
azul.addEventListener("input", actualizarColor);

// Eventos inputs
rojoInput.addEventListener("input", actualizarDesdeInput);
verdeInput.addEventListener("input", actualizarDesdeInput);
azulInput.addEventListener("input", actualizarDesdeInput);

// Evento color picker
colorPicker.addEventListener("input", actualizarDesdePicker);

// Inicializar
actualizarColor();
