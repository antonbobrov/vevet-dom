/**
 * Get the nearest parent element by tagName.
 */
export default function parentByClassName (
    /**
     * The reference element (child)
     */
    child: Element,
    /**
     * Classname of the parent
     */
    className: string,
    /**
     * Maximum nesting level
     */
    maxLevel = Infinity,
    /**
     * Current level
     */
    currentLevel = 0,
): Element | false {

    // check nesting level
    if (currentLevel >= maxLevel) {
        return false;
    }
    // and iterate
    currentLevel++;

    // if overlap, return the parent
    if (child.parentElement instanceof Element) {
        if (child.parentElement.classList.contains(className)) {
            return child.parentElement;
        }
        return parentByClassName(child.parentElement, className, maxLevel, currentLevel);
    }

    return false;

}
