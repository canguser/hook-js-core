## Functions

<dl>
<dt><a href="#hook">hook(parent, methodName, doHookThings, [options])</a> ⇒ <code>void</code></dt>
<dd><p>Hook a method</p>
</dd>
<dt><a href="#hookFunc">hookFunc(parent, methodName, type, callback, options)</a> ⇒ <code>void</code></dt>
<dd><p>Hook target function to replace, using func-js instance</p>
</dd>
<dt><a href="#hookAfter">hookAfter(parent, methodName, after, options)</a> ⇒ <code>void</code></dt>
<dd><p>Hook target function to replace, using func-js instance, and using <code>after</code> method</p>
</dd>
<dt><a href="#hookBefore">hookBefore(parent, methodName, before, options)</a> ⇒ <code>void</code></dt>
<dd><p>Hook target function to replace, using func-js instance, and using <code>before</code> method</p>
</dd>
<dt><a href="#hookError">hookError(parent, methodName, onError, options)</a> ⇒ <code>void</code></dt>
<dd><p>Hook target function to replace, using func-js instance, and using <code>onError</code> method</p>
</dd>
<dt><a href="#hookSurround">hookSurround(parent, methodName, surround, options)</a> ⇒ <code>void</code></dt>
<dd><p>Hook target function to replace, using func-js instance, and using <code>surround</code> method</p>
</dd>
<dt><a href="#hookReplace">hookReplace(parent, methodName, replace, options)</a> ⇒ <code>void</code></dt>
<dd><p>Hook target function to replace, not to using func-js instance</p>
</dd>
<dt><a href="#protectMethod">protectMethod(parent, methodName)</a></dt>
<dd><p>Protect method from modified</p>
</dd>
<dt><a href="#syncToString">syncToString(from, to)</a></dt>
<dd><p>Sync the toString method from origin to target</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#doHookThings">doHookThings</a> ⇒ <code>function</code></dt>
<dd><p>How to hook method</p>
</dd>
<dt><a href="#HookOptions">HookOptions</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="hook"></a>

## hook(parent, methodName, doHookThings, [options]) ⇒ <code>void</code>
Hook a method

**Kind**: global function  

| Param | Type |
| --- | --- |
| parent | <code>Object</code> | 
| methodName | <code>string</code> \| <code>Symbol</code> | 
| doHookThings | [<code>doHookThings</code>](#doHookThings) | 
| [options] | [<code>HookOptions</code>](#HookOptions) | 

<a name="hookFunc"></a>

## hookFunc(parent, methodName, type, callback, options) ⇒ <code>void</code>
Hook target function to replace, using func-js instance

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>object</code> | Parent object |
| methodName | <code>string</code> \| <code>symbol</code> | Target method name to replace |
| type | <code>string</code> | func-js instance    method name: before, after, onError, surround and etc |
| callback | <code>function</code> \| <code>object</code> | func-js instance method params |
| options |  |  |

<a name="hookAfter"></a>

## hookAfter(parent, methodName, after, options) ⇒ <code>void</code>
Hook target function to replace, using func-js instance, and using `after` method

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>object</code> | Parent object |
| methodName | <code>string</code> \| <code>symbol</code> | Target method name to replace |
| after | <code>function</code> | func-js instance method params of `after` |
| options |  |  |

<a name="hookBefore"></a>

## hookBefore(parent, methodName, before, options) ⇒ <code>void</code>
Hook target function to replace, using func-js instance, and using `before` method

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>object</code> | Parent object |
| methodName | <code>string</code> \| <code>symbol</code> | Target method name to replace |
| before | <code>function</code> | func-js instance method params of `before` |
| options |  |  |

<a name="hookError"></a>

## hookError(parent, methodName, onError, options) ⇒ <code>void</code>
Hook target function to replace, using func-js instance, and using `onError` method

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>object</code> | Parent object |
| methodName | <code>string</code> \| <code>symbol</code> | Target method name to replace |
| onError | <code>function</code> | func-js instance method params of `onError` |
| options |  |  |

<a name="hookSurround"></a>

## hookSurround(parent, methodName, surround, options) ⇒ <code>void</code>
Hook target function to replace, using func-js instance, and using `surround` method

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>object</code> | Parent object |
| methodName | <code>string</code> \| <code>symbol</code> | Target method name to replace |
| surround | <code>function</code> | func-js instance method params of `surround` |
| options |  |  |

<a name="hookReplace"></a>

## hookReplace(parent, methodName, replace, options) ⇒ <code>void</code>
Hook target function to replace, not to using func-js instance

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>object</code> | Parent object |
| methodName | <code>string</code> \| <code>symbol</code> | Target method name to replace |
| replace | <code>function</code> | To return a new function to replace origin method |
| options |  |  |

<a name="protectMethod"></a>

## protectMethod(parent, methodName)
Protect method from modified

**Kind**: global function  

| Param | Type |
| --- | --- |
| parent | <code>object</code> | 
| methodName | <code>string</code> | 

<a name="syncToString"></a>

## syncToString(from, to)
Sync the toString method from origin to target

**Kind**: global function  

| Param | Type |
| --- | --- |
| from | <code>any</code> | 
| to | <code>any</code> | 

<a name="doHookThings"></a>

## doHookThings ⇒ <code>function</code>
How to hook method

**Kind**: global typedef  
**Returns**: <code>function</code> - result function  

| Param | Type |
| --- | --- |
| method | <code>FuncInstance</code> | 

<a name="HookOptions"></a>

## HookOptions : <code>Object</code>
**Kind**: global typedef  
