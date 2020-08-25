/**
 * Remove children of an element
 */
export function removeChildren (
    parent: Element,
) {

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

}
