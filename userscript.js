// ==UserScript==
// @name       Nettby NOJS Submit
// @namespace  https://mstg.io
// @version    0.1
// @description  Lagre profil uten javascript
// @match      https://nettby.org/edit_ptext.php
// @require	   https://code.jquery.com/jquery.min.js
// @require	   https://cdn.mstg.io/js/ajaxform.js
// @copyright  2014+, Mustafa
// ==/UserScript==

$(document).ready(function() {
    $("[data-text='Lagre']").append("<input type='button' id='submit' value='Lagre (NOJS)'>"); 
});

$("body").on('click', '#submit', function() {
    $("[name='profil_tekst']").ajaxSubmit({url: '/functions/pt_change.php', type: 'post'});
});
