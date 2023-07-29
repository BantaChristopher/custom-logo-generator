const { Square, Circle, Triangle } = require("./shapes");

describe('Shapes', () => {
    describe('Triangle', () => {
        it('Should generate a triangle using the users choice of shape color', () => {
            const color = 'blue';
            const shape = new Triangle(color);
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
        })
    })
})

describe('Shapes', () => {
    describe('Circle', () => {
        it('Should generate a circle using the users choice of shape color', () => {
            const color = 'pink';
            const shape = new Circle(color);
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="pink"/>');
        })
    })
})

describe('Shapes', () => {
    describe('Square', () => {
        it('Should generate a square using the users choice of shape color', () => {
            const color = 'green';
            const shape = new Square(color);
            expect(shape.render()).toEqual('<rect x="75" y="30" width="150" height="150" style="fill:green"/>');
        })
    })
})