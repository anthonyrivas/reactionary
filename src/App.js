import {useState} from 'react';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {Footer} from './components/Footer';
import {ControlledInput} from './components/ControlledInput';

function App() {
  const [brandName, setBrandName] = useState('Anthony Rivas')
  const [tagLine, setTagline] = useState('Modern JS for the Modern Businessman')

  return (
    <>
      <Header brandName={brandName} tagLine={tagLine}>
        {/* Put links here */}
      </Header>
      <Main>
        <ControlledInput value={brandName} setValue={setBrandName}/>
        <ControlledInput value={tagLine} setValue={setTagline}/>
      </Main>
      <Footer brandName={brandName} ></Footer>
    </>
  );
}

export default App;
