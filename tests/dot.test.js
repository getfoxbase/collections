import Dot from '../src/Tools/Dot'

test('Dot.get', () => {
    let data = {
        a: 1,
        b: 2,
        c: 3,
        d: {
            e: 5,
            f: 6
        },
        g: [
            1, 2, 3, 4, 5
        ]
    }

    expect(Dot.get(data, 'a')).toBe(1)
    expect(Dot.get(data, 'd.f')).toBe(6)
    expect(Dot.get(data, 'g.2')).toBe(3)

    expect(Dot.get(null, 'abc')).toBe(null)
    expect(Dot.get(undefined, 'abc')).toBe(undefined)
    expect(Dot.get(data, 'abc')).toBe(undefined)
})

test('Dot.set', () => {
    let data = {
        a: 1,
        b: 2,
        c: 3,
        d: {
            e: 5,
            f: 6
        },
        g: [
            1, 2, 3, 4, 5
        ]
    }

    Dot.set(data, 'b', 21)
    Dot.set(data, 'd.e', 42)
    Dot.set(data, 'g.1', 10)
    Dot.set(data, 'g.$.foo', 'bar')
    Dot.set(data, 'g.5.foo', 'bar2')
    Dot.set(data, 'g.$', 'foo')
    Dot.set(data, 'foo.bar.its.awesome', 'foobar')

    expect(Dot.get(data, 'b')).toBe(21)
    expect(Dot.get(data, 'd.e')).toBe(42)
    expect(Dot.get(data, 'g.1')).toBe(10)
    expect(Dot.get(data, 'g.5.foo')).toBe('bar2')
    expect(Dot.get(data, 'g.6')).toBe('foo')
    expect(Dot.get(data, 'foo.bar.its.awesome')).toBe('foobar')
})