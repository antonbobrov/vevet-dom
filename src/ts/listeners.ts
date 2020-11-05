export type ListenerElement = Document | Element | Window;

export interface IAddEventListenerOptions {
    /**
     * Indicates that the listener should be invoked at most once after being added.
     * If true, the listener would be automatically removed when invoked.
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener}
     */
    once?: boolean;
    /**
     * If true, indicates that the function specified by listener will never call preventDefault()
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener}
     */
    passive?: boolean;
}

export interface IAddEventListener {
    /**
     * Id of the listener
     */
    id: string;
    /**
     * Remove the event listener
     */
    remove: () => void;
}

/**
 * @ignore
 */
interface IEventListener {
    id: string;
    el: ListenerElement;
    target: string;
    callback: (...arg: any[]) => void;
}



// event listeners
const listeners: IEventListener[] = [];



/**
 * Add an event listener to an element.
 */
export function addEventListener <
    El extends ListenerElement,
    Target extends keyof HTMLElementEventMap,
    Callback extends (ev: HTMLElementEventMap[Target]) => void,
> (
    el: El,
    target: Target,
    callback: Callback,
    options?: IAddEventListenerOptions): IAddEventListener {

    // check if options exist
    if (typeof options !== 'undefined') {

        const listenerOptions = {
            passive: false,
            once: false,
        };

        // check if once
        if (options.once) {
            listenerOptions.once = true;
        }

        // check if passive
        if (options.passive) {
            listenerOptions.passive = true;
        }

        // add an event listener
        el.addEventListener(target, callback, listenerOptions);

    }
    else {
        // add an event listener
        el.addEventListener(target, callback);
    }

    // generate an id for the listener
    const id = `${Math.random()}-${+new Date()}`;
    // add the listener to the stack
    listeners.push({
        id,
        el,
        target,
        callback,
    });

    // return data
    return {
        id,
        remove: removeEventListener.bind(this, id),
    };

}



/**
 * Remove an event listener from an element.
 */
export function removeEventListener (
    /**
     * Id of the listener
     */
    id: string,
) {

    // form a new array of listeners
    const newListeners: IEventListener[] = [];

    // go through all callbacks and search for the required one
    for (let i = 0, l = listeners.length; i < l; i++) {
        const data = listeners[i];

        // remove the callback
        if (data.id === id) {
            data.el.removeEventListener(data.target, data.callback);
        }
        else {
            // add the listener to the new array
            newListeners.push(data);
            continue;
        }

    }

}

