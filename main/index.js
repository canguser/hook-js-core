import { give } from '@func-js/core'

/**
 * How to hook method
 * @callback doHookThings
 * @param method {FuncInstance}
 * @return {Function} result function
 */

/**
 * @typedef HookOptions
 * @type {{protect: boolean, syncDesc: boolean, native: boolean}}
 */
const defaultHookOptions = {
    protect: false,
    syncDesc: true,
    native: false
}

export const defineProperty = Object.defineProperty
export const defineProperties = Object.defineProperties

/**
 * Hook a method
 * @param parent        {Object}
 * @param methodName    {string|Symbol}
 * @param doHookThings  {doHookThings}
 * @param options       {HookOptions=}
 */
export function hook(parent, methodName, doHookThings, options = {}) {
    const origin = parent[methodName]
    if (typeof origin !== 'function') {
        return
    }
    const hookOptions = { ...defaultHookOptions, ...options }
    const { native } = hookOptions
    const targetMethod = doHookThings(native ? origin : give(origin))
    parent[methodName] = native ? targetMethod : function(...args) {
        try {
            return targetMethod.apply(this, args)
        }catch (e) {
            console.warn('[Hook JS]', 'Hooks  running lost once.')
            return origin.apply(this, args)
        }
    }
    const { protect, syncDesc } = hookOptions
    if (protect) {
        protectMethod(parent, methodName)
    }
    if (syncDesc) {
        syncToString(origin, parent[methodName])
    }
}

export function hookFunc(parent, methodName, type, callback, options = {}) {
    return hook(parent, methodName, funcInstance => funcInstance[type](callback), options)
}

export function hookAfter(parent, methodName, after, options = {}) {
    return hookFunc(parent, methodName, 'after', after, options)
}

export function hookBefore(parent, methodName, before, options = {}) {
    return hookFunc(parent, methodName, 'before', before, options)
}

export function hookError(parent, methodName, onError, options = {}) {
    return hookFunc(parent, methodName, 'onError', onError, options)
}

export function hookSurround(parent, methodName, surround, options = {}) {
    return hookFunc(parent, methodName, 'surround', surround, options)
}

export function hookReplace(parent, methodName, replace, options = {}) {
    return hook(parent, methodName, replace, { ...options, native: true })
}

export function protectMethod(parent, methodName) {
    defineProperty.call(Object, parent, methodName, {
        writable: false
    })
}

export function syncToString(from, to) {
    defineProperties.call(Object, to, {
        toString: {
            enumerable: false,
            writable: true,
            value: function() {
                return from.toString()
            }
        },
        toLocaleString: {
            enumerable: false,
            writable: true,
            value: function() {
                return from.toLocaleString()
            }
        }
    })
}