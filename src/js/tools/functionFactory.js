/**
 *
 * This function is used to create elements to be displayed in the DOM
 *
 * @param {*} elementName Input the HTML element you want to create
 * @param {*} className Input the classname you want the element to have !! NB This element have to be added as a array
 * @param {*} elementId Input the element id
 * @param {*} elementInner Include the innerHTML that you want
 * @returns the card with the information you want
 */
export function displayFactory(elementName = '', className = [], elementId = '', ElementInner = ``) {
  const element = document.createElement(elementName);
  element.classList.add(...className);
  element.id = elementId;
  element.innerHTML = ElementInner;
  return element;
}

/**
 *
 * This function is used to populate links
 *
 * @param {*} elementName Input the HTML element you want to create
 * @param {*} className Input the classname you want the element to have !! NB This element have to be added as a array
 * @param {*} elementId Input the element id
 * @param {*} href input the href for the link here
 * @param {*} elementInner Input what the anchor tag will display
 * @returns the card with the information you want
 */
export function linkFactory(className = [], elementId = '', href = '', ElementInner = ``) {
  const element = document.createElement('a');
  element.classList.add(...className);
  element.href = href;
  element.id = elementId;
  element.innerHTML = ElementInner;
  return element;
}

/**
 *
 * This function is used to display images
 *
 * @param {*} elementName Input the HTML element you want to create
 * @param {*} className Input the classname you want the element to have !! NB This element have to be added as a array
 * @param {*} elementId Input the element id
 * @param {*} href This element have to be added as a array
 * @param {*} elementInner Include the innerHTML that you want
 * @returns the card with the information you want
 */
export function imageFactory(className = [], elementId = '', src = '', alt = ``) {
  const element = document.createElement('img');
  element.classList.add(...className);
  element.src = src;
  element.alt = alt;
  element.id = elementId;
  return element;
}

/**
 *
 * This function is used to display buttons to be displayed in the DOM
 *
 * @param {*} elementName Input the HTML element you want to create
 * @param {*} className Input the classname you want the element to have !! NB This element have to be added as a array
 * @param {*} elementId Input the element id
 * @param {*} elementInner Include the innerHTML that you want
 * @returns the card with the information you want
 */
export function buttonFactory(className = [], elementId = '', attributes = [], ElementInner = ``) {
  const element = document.createElement('button');
  element.classList.add(...className);
  element.attributes = attributes;
  element.id = elementId;
  element.innerHTML = ElementInner;
  return element;
}
