import './App.css';
import { Title } from './ui/atoms/title';
import { COLORS } from './ui/model/colors';

function App() {
  return (
    <div className='App'>
      <Title color={COLORS.PRIMARY} size={14}>
        ¡Hola mundo!
      </Title>
    </div>
  );
}

export default App;
