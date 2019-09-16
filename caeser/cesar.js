function encryption () {
	let k = document.getElementById("key").value
	let text = document.getElementById("text").value
	let result = document.getElementById("result")
	let newText = ''
	for(let i = 0; i < text.length; i++) {
		if (text[i] !== ' ') {
			let code = (text.charCodeAt(i) + k - 65) % 26 + 65
			newText = newText.concat(String.fromCharCode(code))
		}
	}
	result.value = newText
}
function decryption () {
	let k = document.getElementById("key").value
	let text = document.getElementById("text").value
	let result = document.getElementById("result")
	let newText = ''
	for(let i = 0; i < text.length; i++) {
		if (text[i] !== ' ') {
			let code = (text.charCodeAt(i) - k + 65) % 26 + 65
			newText = newText.concat(String.fromCharCode(code))
		} else {
			newText = newText.concat(' ')
		}
	}
	result.value = newText
}