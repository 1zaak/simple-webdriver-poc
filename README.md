### A POC to establish a useful testing workflow for migrating from ServisHero's Wordpress Site to TTR

Uses WebDriver and Selenium Server. Follows this [guide](http://webdriver.io/guide.html).

### My thoughts

Was initially interested in Airbnb's Enzyme and React's Test-Util. But the requirements needed a full browser automation to test each Wordpress' links and compare it with TTR. [This](http://blog.strafenet.com/2014/07/03/end-to-end-javascript-testing-is-easy-the-minimal-way-to-do-it/) changed my mind. Webdriver.IO is quite easy to use. 

### Current stack
Currently, TTR already has Enzyme in the devDependencies. But no Webdriver.IO yet.