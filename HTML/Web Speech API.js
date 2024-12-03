const speakText= (text)=> {
	const speech=new SpeechSynthesisUtterance(text);
	speech.lang='en-US';
	speech.pitch=1;
	speech.rate=1;
	window.speechSynthesis.speak(speech);
};

speakText('Save the IndexedDB script in an HTML file and open it in your browser.')