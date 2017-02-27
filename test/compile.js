"use strict";

const Jsony = require('../index.js');

const test = require('ava');

test('verify plugin export', async t => {
    t.truthy(!!Jsony);
    t.notThrows( () => new Jsony());

    t.is(Jsony.prototype.brunchPlugin, true);
    t.is(Jsony.prototype.extension, 'json');
    t.is(Jsony.prototype.type, 'javascript');
});

test('compile JSON', async t => {
    const jsony = new Jsony();

    const json = {
        test: 1,
        inner: "inner",
        nested: {
            nesting: true
        }
    };

    const file = {
        data: JSON.stringify(json)
    };

    jsony.compile(file).then((file) => {
        t.is(file.data, `module.exports = ${JSON.stringify(json)};`);
    }).catch((error) => {
        t.fail(`Unexpected compile error ${error}`);
    });
});

test('rejects bad JSON', async t => {
    const jsony = new Jsony();

    const file = {
        data: "{'invalid': gg}"
    };

    t.throws(jsony.compile(file));
});
