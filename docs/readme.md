## Functions

<dl>
<dt><a href="#hook">hook(parent, methodName, doHookThings, [options])</a></dt>
<dd><p>Hook a method</p>
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

## hook(parent, methodName, doHookThings, [options])
Hook a method

**Kind**: global function  

| Param | Type |
| --- | --- |
| parent | <code>Object</code> | 
| methodName | <code>string</code> \| <code>Symbol</code> | 
| doHookThings | [<code>doHookThings</code>](#doHookThings) | 
| [options] | [<code>HookOptions</code>](#HookOptions) | 

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
