/**
 * Hook a method
 * @param parent        {Object}
 * @param methodName    {string|Symbol}
 * @param doHookThings  {doHookThings}
 * @param options       {HookOptions=}
 */
export function hook(parent: any, methodName: string | Symbol, doHookThings: doHookThings, options?: HookOptions | undefined): void;
export function hookFunc(parent: any, methodName: any, type: any, callback: any, options?: {}): void;
export function hookAfter(parent: any, methodName: any, after: any, options?: {}): void;
export function hookBefore(parent: any, methodName: any, before: any, options?: {}): void;
export function hookError(parent: any, methodName: any, onError: any, options?: {}): void;
export function hookSurround(parent: any, methodName: any, surround: any, options?: {}): void;
export function hookReplace(parent: any, methodName: any, replace: any, options?: {}): void;
export function protectMethod(parent: any, methodName: any): void;
export function syncToString(from: any, to: any): void;
/**
 * How to hook method
 */
export type doHookThings = (method: any) => Function;
export type HookOptions = {
    protect: boolean;
    syncDesc: boolean;
    native: boolean;
};
