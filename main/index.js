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
 * @return {void}
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
        } catch (e) {
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

/**
 * Hook target function to replace, using func-js instance
 * @param parent {object}                   Parent object
 * @param methodName {string | symbol}      Target method name to replace
 * @param type {string} func-js instance    method name: before, after, onError, surround and etc
 * @param callback {function | object}      func-js instance method params
 * @param options
 * @return {void}
 */
export function hookFunc(parent, methodName, type, callback, options = {}) {
    return hook(parent, methodName, funcInstance => funcInstance[type](callback), options)
}

/**
 * Hook target function to replace, using func-js instance, and using `after` method
 * @param parent {object}                   Parent object
 * @param methodName {string | symbol}      Target method name to replace
 * @param after {function}                  func-js instance method params of `after`
 * @param options
 * @return {void}
 */
export function hookAfter(parent, methodName, after, options = {}) {
    return hookFunc(parent, methodName, 'after', after, options)
}

/**
 * Hook target function to replace, using func-js instance, and using `before` method
 * @param parent {object}                   Parent object
 * @param methodName {string | symbol}      Target method name to replace
 * @param before {function}                 func-js instance method params of `before`
 * @param options
 * @return {void}
 */
export function hookBefore(parent, methodName, before, options = {}) {
    return hookFunc(parent, methodName, 'before', before, options)
}

/**
 * Hook target function to replace, using func-js instance, and using `onError` method
 * @param parent {object}                   Parent object
 * @param methodName {string | symbol}      Target method name to replace
 * @param onError {function}                 func-js instance method params of `onError`
 * @param options
 * @return {void}
 */
export function hookError(parent, methodName, onError, options = {}) {
    return hookFunc(parent, methodName, 'onError', onError, options)
}

/**
 * Hook target function to replace, using func-js instance, and using `surround` method
 * @param parent {object}                   Parent object
 * @param methodName {string | symbol}      Target method name to replace
 * @param surround {function}                 func-js instance method params of `surround`
 * @param options
 * @return {void}
 */
export function hookSurround(parent, methodName, surround, options = {}) {
    return hookFunc(parent, methodName, 'surround', surround, options)
}

/**
 * Hook target function to replace, not to using func-js instance
 * @param parent {object}                   Parent object
 * @param methodName {string | symbol}      Target method name to replace
 * @param replace {function}                To return a new function to replace origin method
 * @param options
 * @return {void}
 */
export function hookReplace(parent, methodName, replace, options = {}) {
    return hook(parent, methodName, replace, { ...options, native: true })
}

/**
 * Protect method from modified
 * @param parent {object}
 * @param methodName {string}
 */
export function protectMethod(parent, methodName) {
    defineProperty.call(Object, parent, methodName, {
        writable: false
    })
}

/**
 * Sync the toString method from origin to target
 * @param from {any}
 * @param to {any}
 */
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