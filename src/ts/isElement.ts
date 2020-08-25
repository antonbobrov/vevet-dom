/**
 * Check if the variable is an HTML Element.
 */
export function isElement (
    el: any,
) {
    return (el instanceof HTMLElement) || (el instanceof Element);
}
