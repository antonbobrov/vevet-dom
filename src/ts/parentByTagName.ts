/**
 * Get the nearest parent element by tagName.
 */
export default function parentByTagName (
    /**
     * The reference element (child)
     */
    child: Element,
    /**
     * Tagname of the parent
     */
    tagName: string,
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
        if (child.parentElement.tagName.toLowerCase() === tagName.toLowerCase()) {
            return child.parentElement;
        }
        return parentByTagName(child.parentElement, tagName, maxLevel, currentLevel);
    }

    return false;

}
