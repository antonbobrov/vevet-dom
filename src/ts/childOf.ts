/**
 * Check if an element is a child of another element.
 */
export function childOf (
    /**
     * The element to be checked
     */
    element: Element,
    /**
     * Parent element
     */
    parent: Element,
) {

    return childOfCheck(element, parent);

}

/**
 * @ignore
 */
function childOfCheck (
    el: Element,
    parent: Element,
): boolean {

    if (el === parent) {
        return true;
    }

    if (el !== null) {
        return childOfCheck(
            el.parentNode as Element,
            parent,
        );
    }

    return false;


}
