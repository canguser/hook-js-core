/**
 * Hook a method
 * @param parent        {Object}
 * @param methodName    {string|Symbol}
 * @param doHookThings  {doHookThings}
 * @param options       {HookOptions=}
 * @return {void}
 */
export function hook(parent: any, methodName: string | Symbol, doHookThings: doHookThings, options?: HookOptions | undefined): void;
/**
 * Hook target function to replace, using func-js instance
 * @param parent {object}                   Parent object
 * @param methodName {string | symbol}      Target method name to replace
 * @param type {string} func-js instance    method name: before, after, onError, surround and etc
 * @param callback {function | object}      func-js instance method params
 * @param options
 * @return {void}
 */
export function hookFunc(parent: object, methodName: string | symbol, type: string, callback: Function | object, options?: {}): void;
/**
 * Hook target function to replace, using func-js instance, and using `after` method
 * @param parent {object}                   Parent object
 * @param methodName {string | symbol}      Target method name to replace
 * @param after {function}                  func-js instance method params of `after`
 * @param options
 * @return {void}
 */
export function hookAfter(parent: object, methodName: string | symbol, after: Function, options?: {}): void;
/**
 * Hook target function to replace, using func-js instance, and using `before` method
 * @param parent {object}                   Parent object
 * @param methodName {string | symbol}      Target method name to replace
 * @param before {function}                 func-js instance method params of `before`
 * @param options
 * @return {void}
 */
export function hookBefore(parent: object, methodName: string | symbol, before: Function, options?: {}): void;
/**
 * Hook target function to replace, using func-js instance, and using `onError` method
 * @param parent {object}                   Parent object
 * @param methodName {string | symbol}      Target method name to replace
 * @param onError {function}                 func-js instance method params of `onError`
 * @param options
 * @return {void}
 */
export function hookError(parent: object, methodName: string | symbol, onError: Function, options?: {}): void;
/**
 * Hook target function to replace, using func-js instance, and using `surround` method
 * @param parent {object}                   Parent object
 * @param methodName {string | symbol}      Target method name to replace
 * @param surround {function}                 func-js instance method params of `surround`
 * @param options
 * @return {void}
 */
export function hookSurround(parent: object, methodName: string | symbol, surround: Function, options?: {}): void;
/**
 * Hook target function to replace, not to using func-js instance
 * @param parent {object}                   Parent object
 * @param methodName {string | symbol}      Target method name to replace
 * @param replace {function}                To return a new function to replace origin method
 * @param options
 * @return {void}
 */
export function hookReplace(parent: object, methodName: string | symbol, replace: Function, options?: {}): void;
/**
 * Protect method from modified
 * @param parent {object}
 * @param methodName {string}
 */
export function protectMethod(parent: object, methodName: string): void;
/**
 * Sync the toString method from origin to target
 * @param from {any}
 * @param to {any}
 */
export function syncToString(from: any, to: any): void;
export const defineProperty: (o: any, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>) => any;
export const defineProperties: (o: any, properties: PropertyDescriptorMap & ThisType<any>) => any;
/**
 * How to hook method
 */
export type doHookThings = (method: any) => Function;
export type HookOptions = {
    protect: boolean;
    syncDesc: boolean;
    native: boolean;
};
