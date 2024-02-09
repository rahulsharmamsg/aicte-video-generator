import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import useSound from 'use-sound';
import alllang from "../assets/AudioList/Audios/all-lang.mp3"
import { Play, PlayCircle } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { langSelected,voiceSelected } from '../store/langSlice';
import { Link } from 'react-router-dom';



function LandingPage() {
  const [audio] = useState(typeof Audio !== "undefined" && new Audio(alllang));
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const selectLanguage = (lang, voice) => {
    console.log(lang, voice)
    audio.pause();
    dispatch(langSelected(lang));
    dispatch(voiceSelected(voice));
    navigate('/');
    
  }

  const [play] = useSound(alllang, {
    sprite: {
      Arabic: [0, 2200],
      Bengali: [374, 160],
      Chinese: [666, 290],
      English: [968, 200],
      French: [968, 200],
      German: [968, 200],
      Gujarati: [968, 200],
      Hindi: [968, 200],
      Italian: [968, 200],
      Japanese: [968, 200],
      Kannada: [968, 200],
      Korean: [968, 200],
      Malay: [968, 200],
      Malayalam: [968, 200],
      Marathi: [968, 200],
      Portuguese: [968, 200],
      Russian: [968, 200],
      Spanish: [968, 200],
      Tamil: [968, 200],
      Telugu: [968, 200],
      Turkish: [968, 200],
      Urdu: [968, 200],
    }
  })

  return (
    <>
      {!isPlaying ?
        <div className="overlay">
          <button className='audio-btn' onClick={e => { setIsPlaying(!isPlaying) }}><PlayCircle size={32} /></button>
        </div> : ""
      }
      <Container>
        <div className={"cards d-flex justify-content-center flex-wrap " + (isPlaying ? "cutm" : "")}>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain greenButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("bn-IN", "bn-IN-BashkarNeural")}>
            <Card.Body>
              <h2 className='centertext'>বাঙ্গালি</h2>
              <Card.Text className='centertext'>Bengali</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain redButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("en-IN", "en-IN-NeerjaNeural")}>
            <Card.Body>
              <h2 className='centertext'>English</h2>
              <Card.Text className='centertext' style={{ fontWeight: '700' }}>English</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain blueButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("gu-IN", "gu-IN-DhwaniNeural")}>
            <Card.Body>
              <h2 className='centertext'>ગુજરાતી</h2>
              <Card.Text className='centertext'>Gujarati</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain yellowButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("hi-IN", "hi-IN-SwaraNeural")}>
            <Card.Body>
              <h2 className='centertext'>हिंदी</h2>
              <Card.Text className='centertext'>Hindi</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain perpButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("kn-IN", "kn-IN-SapnaNeural")}>
            <Card.Body>
              <h2 className='centertext'>ಕನ್ನಡ</h2>
              <Card.Text className='centertext' style={{ fontWeight: '700' }}>Kannada</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain redButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("ml-IN", "ml-IN-SobhanaNeural")}>
            <Card.Body>
              <h2 className='centertext'>മലയാളം</h2>
              <Card.Text className='centertext'>Malayalam</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain yellowButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("mr-IN", "mr-IN-AarohiNeural")}>
            <Card.Body>
              <h2 className='centertext'>मराठी</h2>
              <Card.Text className='centertext'>Marathi</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain blueButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("ta-IN", "ta-IN-PallaviNeural")}>
            <Card.Body>
              <h2 className='centertext'>தமிழ்</h2>
              <Card.Text className='centertext'>Tamil</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain greenButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("te-IN", "te-IN-ShrutiNeural")}>
            <Card.Body>
              <h2 className='centertext'>తెలుగు</h2>
              <Card.Text className='centertext'>Telugu</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain perpButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("ur-IN", "ur-IN-GulNeural")}>
            <Card.Body>
              <h2 className='centertext'>اردو</h2>
              <Card.Text className='centertext'>Urdu</Card.Text>
            </Card.Body>
          </Card>

          <div className='dotted-line' />

          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain perpButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("ar", 'ar-AE-FatimaNeural')}>
            <Card.Body>
              <h2 className='centertext'>عربي</h2>
              <Card.Text className='centertext'>Arabic</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain blueButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("zh", "zh-TW-HsiaoChenNeural")}>
            <Card.Body>
              <h2 className='centertext'>中国人</h2>
              <Card.Text className='centertext'>Chinese</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain greenButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("fr", "fr-BE-CharlineNeural")}>
            <Card.Body>
              <h2 className='centertext'>Français</h2>
              <Card.Text className='centertext'>French</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain blueButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("de", "de-AT-IngridNeural")}>
            <Card.Body>
              <h2 className='centertext'>Deutsch</h2>
              <Card.Text className='centertext'>German</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain yellowButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("it", "it-IT-IsabellaNeural")}>
            <Card.Body>
              <h2 className='centertext'>Italiano</h2>
              <Card.Text className='centertext'>Italian</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain greenButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("ja", "ja-JP-AoiNeural")}>
            <Card.Body>
              <h2 className='centertext'>日本</h2>
              <Card.Text className='centertext'>Japanese</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain perpButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("ko", "ko-KR-JiMinNeural")}>
            <Card.Body>
              <h2 className='centertext'>한국인</h2>
              <Card.Text className='centertext'>Korean</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain redButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("pt", "pt-PT-FernandaNeural")}>
            <Card.Body>
              <h2 className='centertext'>Português</h2>
              <Card.Text className='centertext'>Portuguese</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain redButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("ru", "ru-RU-SvetlanaNeural")}>
            <Card.Body>
              <h2 className='centertext'>Русский</h2>
              <Card.Text className='centertext'>Russian</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain yellowButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("es", "es-ES-AbrilNeural")}>
            <Card.Body>
              <h2 className='centertext'>Español</h2>
              <Card.Text className='centertext'>Spanish</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain blueButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("tr", "tr-TR-EmelNeural")}>
            <Card.Body>
              <h2 className='centertext'>Türkçe</h2>
              <Card.Text className='centertext'>Turkish</Card.Text>
            </Card.Body>
          </Card>
          <Card bg={'Light'} text={'Dark'} className="mb-2 cardmain greenButton zoom-in-zoom-out" key={'Light'} onClick={e => selectLanguage("ms", "ms-MY-YasminNeural")}>
            <Card.Body>
              <h2 className='centertext'>Melayu</h2>
              <Card.Text className='centertext'>Malay</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
      
    </>
  );
}

export default LandingPage;
