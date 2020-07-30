const calculateSquare = require('../src/calculate-square.js');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculateSquare', function() {
    this.timeout(4000); // to make sure the timeout is more than what the test needed
    it('should resolve with number 4 if passed number 2', function(done) {
        expect(calculateSquare(2)).to.eventually.equal(4).notify(done);
    });

    // Multiple assertions
    it('should resolve with number 4 if passed number 2', function() {
        return calculateSquare(2).then(result => {
            expect(result).to.be.equal(4);
            expect(result).to.be.above(3);
        });
    });

    it('should become fulfilled when passed nunber 2', function(done) {
        expect(calculateSquare(2)).to.be.fulfilled.notify(done);
    });

    it('should become rejected if passed a string instead of a number', function(done) {
        expect(calculateSquare('2')).to.be.rejected.notify(done);
    })

    it('should become rejected if passed a string instead of a number', function() {
        return calculateSquare('2').catch((reason) => {
            expect(reason).to.not.equal(null);
            expect(reason.message).to.equal('Argument of type number is expected');
        })
    })
})
