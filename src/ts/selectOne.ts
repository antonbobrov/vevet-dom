import { isElement } from './isElement';
import { isWindow } from './isWindow';
import { HTMLElementTag } from './types';



/**
 * Selector types
 */
export type SelectorOne = string | Element | Window;



/**
 * Select only one DOM element.
 */
export function selectOne<T extends SelectorOne | HTMLElementTag> (
    /**
     * Query selector
     */
    selector: T,
    /**
     * A parent for the needed element
     */
    parent?: Element | string,
): (
    T extends Window ?
        Window :
            T extends HTMLElementTag ? HTMLElementTagNameMap[T] :
                (HTMLElement | Element | null)
) {

    if (isWindow(selector)) {
        return selector as any;
    }
    if (isElement(selector)) {
        return selector as any;
    }

    // if string
    if (typeof parent !== 'undefined') {
        const parenEl = selectOne(parent);
        if (parenEl) {
            return parenEl.querySelector(selector as string) as any;
        }
    }

    return document.querySelector(selector as string) as any;

}
