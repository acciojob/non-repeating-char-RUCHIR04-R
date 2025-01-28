function firstNonRepeatedChar(str) {
 // Write your code here
const charConst = {};
	for(let i = 0; i < str.length; i++)
		{
			const char = str[i];
			charConst[char] = (charConst[char] || 0) + 1;
		}
	for(let  i =0; i < str.length; i++){
		const char = str[i];
		if (charConst[char] === 1){
			return char;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
J