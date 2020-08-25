/**
 * Insert an element after another one.
 */
export function insertAfter (
    /**
     * The element to be inserted
     */
    element: Element,
    /**
     * The reference element after which the first element will be appended.
     */
    referenceElement: Element,
) {

    const parent = referenceElement.parentNode;
    const next = referenceElement.nextSibling;

    if (next) {
        parent.insertBefore(element, next);
    }
    else {
        parent.appendChild(element);
    }

}
