const Cube = require('../src/app').Cube;
const Triangle = require('../src/app').Triangle;
const expect = require('chai').expect;

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});

describe('Testing the Triangle Functions', function() {
        it('1.length height and width of the Triangle', function(done) {
            let t1 = new Triangle(6,3,4);
            expect(t1.getSideLength()).to.equal(6);
            expect(t1.getSideHeight()).to.equal(3);
            expect(t1.getSideWidth()).to.equal(4);
            done();
        });


        it('2. The surface area of the Triangle', function(done) {
            let t2 = new Triangle(6,3,4);
            expect(t2.getSurfaceArea()).to.equal(9);
            done();
        });

        it('3. The volume of the Triangle', function(done) {
            let t2 = new Triangle(6,3,4);
            expect(t2.getVolume()).to.equal(36);
            done();
    });
});