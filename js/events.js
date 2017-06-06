
export const onDragOver = (event) => {
  if(event.preventDefault) event.preventDefault();
  if (event.stopPropagation) event.stopPropagation();
  else event.cancelBubble = true;
  return false;
}
