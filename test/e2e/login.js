var config = require('../../nightwatch.conf.BASIC');

module.exports = {
    'Login to site': function(browser){
        browser
            .url("http://automationpractice.com/index.php")
            .click('.login')
            .setValue('input[name = "email"]', 'moe@test.com')
            .setValue('input[name = "passwd"]', 'testtest')
            .click('#SubmitLogin')
            .assert.containsText(".page-heading", "MY ACCOUNT")
            .end();
    }
}