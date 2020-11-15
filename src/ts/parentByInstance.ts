/**
 * Get the nearest parent element by instance.
 */
export default function parentByInstance <T extends Element> (
    /**
     * The reference element (child)
     */
    child: Element,
    /**
     * The instance
     */
    instance: any,
    /**
     * Maximum nesting level
     */
    maxLevel = Infinity,
    /**
     * Current level
     */
    currentLevel = 0,
): T | false {

    // check nesting level
    if (currentLevel >= maxLevel) {
        return false;
    }
    // and iterate
    currentLevel++;

    // if overlap, return the parent
    if (child.parentElement instanceof Element) {
        if (child.parentElement instanceof fixInstance(instance)) {
            return child.parentElement as any;
        }
        return parentByInstance(child.parentElement, instance, maxLevel, currentLevel);
    }

    return false;

}

/**
 * @ignore
 */
function fixInstance (instance: any) {
    return instance;
}
