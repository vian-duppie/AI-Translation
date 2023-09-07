
import './App.css';
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import switchImage from './Switch.svg'

function App() {
	const languageList = [
		{key: "en", value: "English (United Kingdom)"},
		{key: "es", value: "Spanish (Spain)"},
		{key: "fr", value: "French (France)"},
		{key: "de", value: "German (Germany)"},
		{key: "it", value: "Italian (Italy)"},
		{key: "ar", value: "Arabic (Saudi Arabia)"},
		{key: "zh", value: "Chinese (China)"},
		{key: "ja", value: "Japanese (Japan)"},
		{key: "ko", value: "Korean (South Korea)"},
		{key: "ru", value: "Russian (Russia)"},
		{key: "pt", value: "Portuguese (Portugal)"},
		{key: "hi", value: "Hindi (India)"},
		{key: "bn", value: "Bengali (Bangladesh)"},
		{key: "ur", value: "Urdu (Pakistan)"},
		{key: "sw", value: "Swahili (Kenya)"},
		{key: "af", value: "Afrikaans (South Africa)"},
		{key: "tr", value: "Turkish (Turkey)"},
		{key: "fa", value: "Persian (Iran)"},
		{key: "th", value: "Thai (Thailand)"},
		{key: "vi", value: "Vietnamese (Vietnam)"},
		{key: "el", value: "Greek (Greece)"},
		{key: "he", value: "Hebrew (Israel)"},
		{key: "sv", value: "Swedish (Sweden)"},
		{key: "fi", value: "Finnish (Finland)"},
		{key: "no", value: "Norwegian (Norway)"},
		{key: "da", value: "Danish (Denmark)"},
		{key: "nl", value: "Dutch (Netherlands)"},
		{key: "hu", value: "Hungarian (Hungary)"},
		{key: "pl", value: "Polish (Poland)"},
		{key: "cs", value: "Czech (Czech Republic)"},
		{key: "sk", value: "Slovak (Slovakia)"},
		{key: "sl", value: "Slovenian (Slovenia)"},
		{key: "hr", value: "Croatian (Croatia)"},
		{key: "sr", value: "Serbian (Serbia)"},
		{key: "ro", value: "Romanian (Romania)"},
		{key: "bg", value: "Bulgarian (Bulgaria)"},
		{key: "uk", value: "Ukrainian (Ukraine)"},
		{key: "et", value: "Estonian (Estonia)"},
		{key: "lv", value: "Latvian (Latvia)"},
		{key: "lt", value: "Lithuanian (Lithuania)"},
		{key: "sq", value: "Albanian (Albania)"},
		{key: "mk", value: "Macedonian (North Macedonia)"},
		{key: "mt", value: "Maltese (Malta)"},
		{key: "eu", value: "Basque (Spain)"},
		{key: "ca", value: "Catalan (Spain)"},
		{key: "gl", value: "Galician (Spain)"},
		{key: "ga", value: "Irish (Ireland)"},
		{key: "cy", value: "Welsh (United Kingdom)"},
		{key: "gd", value: "Scottish Gaelic (United Kingdom)"},
		{key: "kw", value: "Cornish (United Kingdom)"},
		{key: "br", value: "Breton (France)"},
		{key: "euq", value: "Quechua (Peru)"},
		{key: "quz", value: "Cusco Quechua (Peru)"},
		{key: "que", value: "Southern Quechua (Bolivia)"},
		{key: "ayc", value: "Southern Aymara (Bolivia)"},
		{key: "nso", value: "Northern Sotho (South Africa)"},
		{key: "st", value: "Southern Sotho (South Africa)"},
		{key: "tn", value: "Tswana (Botswana)"},
		{key: "ts", value: "Tsonga (South Africa)"},
		{key: "ss", value: "Swati (Eswatini)"},
		{key: "nr", value: "South Ndebele (Zimbabwe)"},
		{key: "nd", value: "North Ndebele (Zimbabwe)"},
		{key: "xh", value: "Xhosa (South Africa)"},
		{key: "zu", value: "Zulu (South Africa)"},
		{key: "si", value: "Sinhala (Sri Lanka)"},
		{key: "km", value: "Khmer (Cambodia)"},
		{key: "my", value: "Burmese (Myanmar)"},
		{key: "ka", value: "Georgian (Georgia)"},
		{key: "am", value: "Amharic (Ethiopia)"},
		{key: "ti", value: "Tigrinya (Eritrea)"},
		{key: "om", value: "Oromo (Ethiopia)"},
		{key: "so", value: "Somali (Somalia)"},
		{key: "swc", value: "Congo Swahili (Democratic Republic of the Congo)"},
		{key: "rw", value: "Kinyarwanda (Rwanda)"},
		{key: "ki", value: "Kikuyu (Kenya)"},
		{key: "luo", value: "Luo (Kenya)"},
		{key: "luy", value: "Luhya (Kenya)"},
		{key: "lg", value: "Luganda (Uganda)"},
		{key: "sn", value: "Shona (Zimbabwe)"},
		{key: "ne", value: "Nepali (Nepal)"},
		{key: "dz", value: "Dzongkha (Bhutan)"},
		{key: "dzg", value: "Dazaga (Chad)"},
		{key: "ha", value: "Hausa (Nigeria)"},
		{key: "yo", value: "Yoruba (Nigeria)"},
		{key: "ig", value: "Igbo (Nigeria)"},
		{key: "ff", value: "Fulah (Senegal)"},
		{key: "wo", value: "Wolof (Senegal)"},
	]

	const [outPut, setOutput] = useState('')
	const [inputSelect, setInputSelect] = useState('')
	const [outputSelect, setOutputSelect] = useState('')
	const [inputText, setInputText] = useState('')

	const handleSelectChange = e => {
		setInputSelect(e.target.value)
	}

	const handleOutputSelect = e => {
		console.log(e.target.value)
		setOutputSelect(e.target.value)
	}

	const switchSelect = () => {
		setInputSelect(outputSelect)
		setOutputSelect(inputSelect)
		setInputText(outPut)
		setOutput("")
	}

	const handleInputTextChange = e => {
		setInputText(e.target.value)
	}

	const translateApi = async (t) => {
		if (inputText == "" || inputSelect == "" || outputSelect == "") {
			alert("Please select the input and output language, also fill in the text that you want to translate")
			return
		}
		try {
			axios.get(`https://api.mymemory.translated.net/get?q=${t}&langpair=${inputSelect}|${outputSelect}`)
			.then((res) => {
				console.log(res)
				setOutput(res.data.responseData.translatedText)
			})
			.catch((err) => {
				console.log(err)
			})

		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="App">
			<div className='bigContainer'>
			<div className='leftContainer'>
				<select className="inputSelect" value={inputSelect} onChange={handleSelectChange}>
					<option value="">Select Language</option>
					{
						languageList.map(x => 
							<option key={x.key} value={x.key}>{x.value}</option>
						)
					}
					
				</select>

				<textarea placeholder='Enter text' value={inputText} onChange={handleInputTextChange}/>
			</div>
			<div className='middleContainer'>
				<div onClick={switchSelect}>
					<img src={switchImage}/>
				</div>
			</div>
			<div className='rightContainer'>
				<select className="inputSelect" value={outputSelect} id="dropdown" onChange={handleOutputSelect}>
				<option value="">Select Language</option>
				{
					languageList.map(x => 
						<option key={x.key} value={x.key}>{x.value}</option>
					)
				}
				</select>

				<textarea placeholder='translation' value={outPut}/>
			</div>
			</div>

			<div className='translateButton' onClick={() => translateApi(inputText)}>Translate</div>
		</div>
	);
}

export default App;
