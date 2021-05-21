import {hook} from "../main";

describe('test for core js', function () {
    it('should hooking works', function () {
        hook(console, 'log', method => method.after(({args}) => args[0]));
        expect(console.log('你好')).toBe('你好');
    });
});