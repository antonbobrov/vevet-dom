import { isElement } from './isElement';
import { selectOne } from './selectOne';
import { HTMLElementTag } from './types';

/**
 * Selector types
 */
export type SelectorAll = string | NodeList | Element | Element[];

/**
 * Selector types
 * @ignore
 */
type NodeListByTagName<T extends HTMLElementTag> = NodeListOf<HTMLElementTagNameMap[T]>;



/**
 * Select all DOM elements that match a query selector
 */
export function selectAll<T extends SelectorAll | HTMLElementTag> (
    /**
     * Query selector
     */
    selector: T,
    /**
     * A parent for the needed elements
     */
    parent?: Element | string,
): (
    T extends Element[] ? Element[] :
        T extends Element ? Element[] :
            // @ts-ignore
            T extends HTMLElementTag ? NodeListByTagName<T> :
                NodeListOf<Element>
) {

    if (selector instanceof NodeList) {
        return selector as any;
    }
    if (isElement(selector)) {
        return [selector] as any;
    }
    if (Array.isArray(selector)) {
        return selector as any;
    }

    // if string
    if (typeof parent !== 'undefined') {
        const parenEl = selectOne(parent);
        if (parenEl) {
            return parenEl.querySelectorAll(selector as string) as any;
        }
    }

    return document.querySelectorAll(selector as string) as any;

}
