import { Triangle } from "./Triangle";

describe('Háromszöghöz tartozó methódusok',() => {
    let triangle: Triangle;
    beforeEach(() =>{
        triangle = new Triangle();
    });
    it('Terület számítás',() =>{
        triangle.base = 30;
        triangle.height = 35;
        triangle.calcArea();
        let actual = triangle.area;
        let expected = 525;
        expect(expected).toEqual(actual);
    })
    it('Kerület számítás',() =>{
        triangle.aSide = 30;
        triangle.bSide = 30;
        triangle.cSide = 30;
        triangle.calcPerimeter();
        expect(triangle.perimeter).toEqual(90);
    })
});