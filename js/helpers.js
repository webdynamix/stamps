/*
  reusable for attaching events
*/
export const bindEvent = (element, event, delegate ) => {
  if (typeof (window.event) != 'undefined' && element.attachEvent)
    element.attachEvent('on' + event, delegate);
  else
    element.addEventListener(event, delegate, false);
}
/*
  Similar to jQuery's $( document ).ready()
*/
export const onDocumentReady = (callback) => {
  bindEvent(document, 'readystatechange', () => {
    if ( document.readyState !== "complete" ) return true;

    callback();
  });
}

/*
  preventing events moving to their next target (bubbling)
*/
export const preventBubbling = (event) => {
  if(event.preventDefault) event.preventDefault();
  if (event.stopPropagation) event.stopPropagation();
  else event.cancelBubble = true;
}

export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const appendSelectOptions =  (selectbox, limit) => {
  const random = getRandom(1, limit);

  for (let i = 1; i <= limit; i++) {
    const option = document.createElement('option');
    option.text = i;
    option.value = i;
    if (i === random) option.selected = true;

    selectbox.appendChild(option);
  }
}
/*
  *Toggles .expanded on #navCollapse for mobile nav menu
*/
export const navToggle = (event) => {
  const el = document.getElementById('navCollapse');
  if (el.classList.value.indexOf('expanded') === -1) el.classList.add('expanded');
  else el.classList.remove('expanded');
}
