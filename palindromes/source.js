function Input(){
	var userInput = document.getElementById('input').value;
	var result= palindrome(userInput);
	document.getElementById('result').innerHTML = result;
}



function palindrome(str){

	var re = /[\W_]/g;
	var lowRegStr = str.toLowerCase().replace(re,'');
	var reverseStr =lowRegStr.split('').reverse().join('');
	return reverseStr === lowRegStr;

}