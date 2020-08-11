/**
 * Canvas Background Pattern
 * @param {enabledElement} enabledElement The Enabled Element
 * @param {String} [_color1] Color 1
 * @param {String} [_color2] Color 2
 * @param {Number} [_numberOfStripes] Number of stripes
 * @returns {void}
 */
export default function (enabledElement, _color1, _color2, _numberOfStripes) {
  const myCanvas = enabledElement.canvas;
  const context = myCanvas.getContext('2d');

  // context.fillStyle = 'blue';
  // context.fillRect(0, 0, myCanvas.width, myCanvas.height); // Render all visible layers
  // return;

  const color1 = _color1 || '#000000',
    color2 = _color2 || '#222222';

  const numberOfStripes = _numberOfStripes || 200;

  const canv_width = myCanvas.width;
  const canv_height = myCanvas.height;

  const thickness = canv_width / numberOfStripes;

  const left_offset = Math.floor(canv_height / thickness);

  for (let i = -left_offset; i < numberOfStripes; i++) {
    context.beginPath();
    context.strokeStyle = i % 2 ? color1 : color2;
    context.lineWidth = thickness;
    context.lineCap = 'round';

    context.moveTo(i * thickness - 20, -20);
    context.lineTo(canv_height + i * thickness, canv_height);
    context.stroke();
  }
}
