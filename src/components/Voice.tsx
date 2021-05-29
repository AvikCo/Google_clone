import {useState, useEffect, useContext} from 'react';
import '../styles/voiceSearch.css';
import { withRouter } from 'react-router-dom';
import visualization from '../images/main.gif';
import SpeechRecognition, {
	useSpeechRecognition,
	//No type defination file available
	//@ts-ignore
} from 'react-speech-recognition';

import DataContext from '../contexts/SearchDataContext';
import { SettingsRemoteSharp } from '@material-ui/icons';


const VoiceSearch = withRouter(({ history })=> {
	const {
		transcript,
		interimTranscript,
		finalTranscript,
		resetTranscript,
		listening,
	} = useSpeechRecognition();
	const [msg, setMsg] = useState('Loading...')
	const { onSearch } = useContext(DataContext);

	useEffect(() => {
			const timer = setTimeout(startListening,2500)
			return () => clearTimeout(timer)
	}, []);
	useEffect(() => {
		if (finalTranscript != '') {
			setMsg('Got It! Searching...')
			MakeSearch(finalTranscript);
			console.log(finalTranscript);
		}
console.log('triggerd use effect')
	},[finalTranscript])
	
	const MakeSearch = async (searchTerm: string) => {
		await onSearch(searchTerm);
		history.push('/search');
	}

	//@ts-ignore
	if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
		alert('Your browser dosent support speech recognition software. Try chrome desktop, maybe?')
		history.push('/');
	}
	const startListening = async () => {
		try {
			//asking microphone permission if needed
			const audio = await navigator.mediaDevices.getUserMedia({
				audio: true,
				video: false,
			});
			if (audio) {
				//turning off the microphone as the next funtion will on it
				audio.getTracks().forEach((track) => track.stop());
				setTimeout(SpeechRecognition.startListening, 1000);
				setMsg('Speak Up');
				setTimeout(() => setMsg('Not Listening'), 1000);
			}
		} catch (err) {
			setMsg('Microphone access permission denied. Switching to text search ')
			history.push('/');
		}	
	}
	return (
		<div className='voiceSearch'>
			{listening ? <h1>Listening...</h1> : <h1>{msg}</h1>}
			<img src={visualization} alt='Voice Visualization' />
			{/* {listening ? 'on' : 'off'} */}
			{transcript ? <h2>"{transcript}"</h2> : null}
		</div>
		//https://www.loginradius.com/blog/async/quick-look-at-react-speech-recognition/
	);
});
export default VoiceSearch;