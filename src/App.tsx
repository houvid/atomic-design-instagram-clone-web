import './App.css';
import { SubTitle } from './ui/atoms/sub-title';
import { Title } from './ui/atoms/title';
import { COLORS } from './ui/model/colors';

function App() {
  return (
    <div className='App'>
      <Title color={COLORS.PRIMARY} size={14}>
        ¡Hola mundo!
      </Title>
      <SubTitle>
        Es el sub del mundoasdas asd as dasd asdasd asdasdasdasd
      </SubTitle>
    </div>
  );
}

export default App;
