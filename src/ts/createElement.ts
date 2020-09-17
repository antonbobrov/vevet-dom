/**
 * Element's properties
 */
export interface CreateElementProp <T extends keyof HTMLElementTagNameMap> {
    /**
     * Class names (split by whitespace)
     */
    class?: string;
    /**
     * ID of the element
     */
    id?: string;
    /**
     * Element attributes
     */
    attr?: [string, string][];
    /**
     * The parent element
     */
    parent?: Element;
    /**
     * innerHTML of the element
     */
    html?: string;
    /**
     * The element's children
     */
    children?: Element[] | NodeListOf<Element>;
}



/**
 * Create a DOM element
 */
export function createElement <T extends keyof HTMLElementTagNameMap> (
    /**
     * TagName
     */
    selector: T,
    /**
     * Element properties
     */
    prop: CreateElementProp<T> = {},
): HTMLElementTagNameMap[T] {

    // create an element
    const el = document.createElement(selector);

    // add classes
    if (prop.class) {
        const classNames = prop.class.split(' ');
        classNames.forEach((name) => {
            el.classList.add(name);
        });
    }

    // add id
    if (prop.id) {
        el.setAttribute('id', prop.id);
    }

    // add attributes
    if (prop.attr) {
        for (let i = 0, l = prop.attr.length; i < l; i++) {
            const attrInfo = prop.attr[i];
            el.setAttribute(attrInfo[0], attrInfo[1]);
        }
    }

    // append to parent
    if (prop.parent) {
        prop.parent.appendChild(el);
    }

    // add html
    if (prop.html) {
        el.innerHTML = prop.html;
    }

    // add children
    if (prop.children) {
        for (let i = 0, l = prop.children.length; i < l; i++) {
            el.appendChild(prop.children[i]);
        }
    }

    // return the element
    return el;

}
