// Copyright (C)  2016 nokaa <nokaa@cock.li>
// This software is licensed under the terms of the
// GNU General Public License version 3. You should have
// received a copy of this license with this software.
// The license may also be found at https://gnu.org/licenses/gpl.txt

// ==UserScript==
// @name        remove-github-reactions
// @version     1.0.0
// @namespace   remove-github-reactions
// @description Removes reactions to comments on Github
// @license     GPLv3, https://gnu.org/licenses/gpl.txt
// @include     https://github.com/*
// @include     http://github.com/*
// @grant       none
// @updateURL   https://raw.githubusercontent.com/nokaa/remove-github-reactions/master/remove-github-reactions.user.js
// @downloadURL https://raw.githubusercontent.com/nokaa/remove-github-reactions/master/remove-github-reactions.user.js
// ==/UserScript==

var upboats = document.getElementsByClassName("comment-reactions");

for (i = 0; i < a.length; i += 1) {
    upboats.item(0).remove();
}
