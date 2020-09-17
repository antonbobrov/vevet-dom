/**
 * Add a class name or names to an element or a collection of elements
 */
export function addClass (
    /**
     * The target element (elements)
     */
    el: Element | NodeListOf<Element> | Element,
    /**
     * ClassName or names split by whitespace
     */
    classNames: string,
) {
    if (el instanceof Element) {
        setElClass(el, classNames, true);
    }
    else {
        for (let i = 0; i < el.length; i++) {
            setElClass(el[i], classNames, true);
        }
    }
}



/**
 * Remove a class name or names from an element or a collection of elements
 */
export function removeClass (
    /**
     * The target element (elements)
     */
    el: Element | NodeListOf<Element> | Element,
    /**
     * ClassName or names split by whitespace
     */
    classNames: string,
) {
    if (el instanceof Element) {
        setElClass(el, classNames, false);
    }
    else {
        for (let i = 0; i < el.length; i++) {
            setElClass(el[i], classNames, false);
        }
    }
}



/**
 * Toggle a class name or names from an element or a collection of elements
 */
export function toggleClass (
    /**
     * The target element (elements)
     */
    el: Element | NodeListOf<Element> | Element,
    /**
     * ClassName or names split by whitespace
     */
    classNames: string,
) {
    if (el instanceof Element) {
        setElClass(el, classNames);
    }
    else {
        for (let i = 0; i < el.length; i++) {
            setElClass(el[i], classNames);
        }
    }
}



///
function setElClass (
    /**
     * The element
     */
    e: Element,
    /**
     * Class names
     */
    classNames: string,
    /**
     * Undefined - toggle, true - add, false - remove
     */
    action?: undefined | true | false,
) {

    const names = classNames.split(' ');
    for (let i = 0; i < names.length; i++) {

        if (typeof action === 'undefined') {
            e.classList.toggle(names[i]);
        }
        else if (action) {
            e.classList.add(names[i]);
        }
        else {
            e.classList.remove(names[i]);
        }

    }

}
