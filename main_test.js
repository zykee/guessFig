/**
 * Created by coco on 17-7-18.
 */
describe("guess Figure",()=>{
    it('4A0B',()=>{
        var str = '4A0B'
        var outStr = guessFig('1234');
        expect(str).toEqual(outStr);
    });
    it('3A0B',()=>{
        var str = '3A0B'
        var outStr = guessFig('1235');
        expect(str).toEqual(outStr);
    });
    it('2A0B',()=>{
        var str = '2A0B'
        var outStr = guessFig('1256');
        expect(str).toEqual(outStr);
    });
    it('1A0B',()=>{
        var str = '1A0B'
        var outStr = guessFig('1567');
        expect(str).toEqual(outStr);
    });
    it('2A2B',()=>{
        var str = '2A2B'
        var outStr = guessFig('1243');
        expect(str).toEqual(outStr);
    });
    it('2A1B',()=>{
        var str = '2A1B'
        var outStr = guessFig('1245');
        expect(str).toEqual(outStr);
    });
    it('1A3B',()=>{
        var str = '1A3B'
        var outStr = guessFig('1423');
        expect(str).toEqual(outStr);
    });
    it('1A2B',()=>{
        var str = '1A2B'
        var outStr = guessFig('1325');
        expect(str).toEqual(outStr);
    });
    it('1A1B',()=>{
        var str = '1A1B'
        var outStr = guessFig('1562');
        expect(str).toEqual(outStr);
    });
    it('0A0B',()=>{
        var str = '0A0B'
        var outStr = guessFig('5678');
        expect(str).toEqual(outStr);
    });
    it('0A1B',()=>{
        var str = '0A1B'
        var outStr = guessFig('5671');
        expect(str).toEqual(outStr);
    });
    it('0A2B',()=>{
        var str = '0A2B'
        var outStr = guessFig('2156');
        expect(str).toEqual(outStr);
    });
    it('0A3B',()=>{
        var str = '0A3B'
        var outStr = guessFig('3415');
        expect(str).toEqual(outStr);
    });
    it('0A4B',()=>{
        var str = '0A4B'
        var outStr = guessFig('4321');
        expect(str).toEqual(outStr);
    });

});