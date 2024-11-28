import { useState } from 'react';
import RoundButton from './components/roundbutton';
// 사용할 css 파일을 import

function App() {

  const [title, newTitle] = useState('Wellcom to my app');

  return (
    <div className='App'>
      <h1 className="bg-black font-bold">{title}</h1>
      <br/>
      <div style={
        {display: "grid",placeItems: "center"}
      }>
      <RoundButton 
        buttonText = '인사 말 바꾸기'
        onClick = {()=>{
          if(title === 'Wellcom to my app') {
            newTitle('Hellow Love Free Unity')
          }else {
            newTitle('Wellcom to my app')
          }
        }}
      />
      </div>
    </div>
  );
}



export default App
