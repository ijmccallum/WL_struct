"use strict";

const test = require('tape');
const http = require('http');

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout);

test('API test', function(t){

    t.end();
});