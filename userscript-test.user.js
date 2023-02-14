// ==UserScript==
// @name         userscript-test
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oktana-a7-dev-ed.my.site.com/fakeSafari/s/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=site.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    setTimeout(1000, alert("Hello"));
    document.getElementById('title').innerText = 'Something else - 2';
    document.getElementById('text1').innerText = 'Changed with userscript';
    document.getElementById('text2').innerText = 'Changed with userscript';
    document.getElementById('text3').innerText = 'Changed with userscript';
    document.getElementById('text4').innerText = 'Changed with userscript';
})();
