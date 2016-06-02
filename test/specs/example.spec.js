var assert = require('assert');

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://thailand.servishero.com/th/en/bangkok');
        var title = browser.getTitle();
        assert.equal(title, 'Hire Trusted Service Professionals in Bangkok | ServisHero');
    });
});