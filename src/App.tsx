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

      <SubTitle>azuladotoujours y 5 más siguen esta cuenta</SubTitle>
    </div>
  );
}

export default App;
