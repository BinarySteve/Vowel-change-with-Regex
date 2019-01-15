/*
This is a function to convert words that contain vowels i.e. 'hello world'
and convert the vowels into whatever you want i.e. 'hxllx wxrld'
*/
$('#button').on('click',()=>{
//Get word(s) with vowels\\
let word = $('#yourWord').val().toLowerCase();

//Get input for letter, number,symbol, or word to replace vowels\\
let replacer = $('#replacer').val().toLowerCase();

//use regex to search for  vowels and use replace to replace vowels with replacer variable
let regReplacer = word.replace(/[aeiouy]/g, replacer);

$('#outputWord').html(word); $('#outputReplace').html(regReplacer);

});
	

