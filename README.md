## A POC to establish a useful testing workflow for migrating from ServisHero's Wordpress Site to TTR

This approach utilizes [Webdriver](http://webdriver.io/) and [Selenium Server](http://goo.gl/IHP6Qw). 
### My thoughts

Was initially interested in Airbnb's [Enzyme](http://airbnb.io/enzyme/) and React's [Test-Util](https://facebook.github.io/react/docs/test-utils.html). But after rethinking the requirements, this workflow definitely needed a full browser automation (Selenium), e.g. to test each Wordpress' links and compare it with TTR. Found this [article](http://blog.strafenet.com/2014/07/03/end-to-end-javascript-testing-is-easy-the-minimal-way-to-do-it/) which helped finalize the decision.  Webdriver also makes it very easy to use JS with Selenium, besides also the possibility to use Mocha or other test-runners.

### Current stack
Currently, TTR already has Enzyme in the devDependencies. But no Webdriver yet.

### Guide

You can follow this [guide](http://webdriver.io/guide.html) to setup Selenium Server and Webdriver.