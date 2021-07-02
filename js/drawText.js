export const drawText = (font, centerX, centerY, text, context) =>{
    context.save();
    context.font = `bold ${font}px sans-serif`;
    context.fillStyle = "gray";
    context.textAligne = "center";
    context.textBaseLine = "middle";
    context.fillText(text, centerX-50, centerY);
    context.restore();
}