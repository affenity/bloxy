const TEST_COOKIE = process.env.TEST_COOKIE;

if (!TEST_COOKIE) {
    console.error(`Failed to start tests, the test cookie was not provided!`);
}

module.exports = TEST_COOKIE.slice(1)
    .substr(0, TEST_COOKIE.length - 2);
