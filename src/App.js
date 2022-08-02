import styles from './App.module.css';

import Header from './Components/Header';
import Pods from './Modules/Pods';

function App() {
  return (
    <div className={ styles.app } >
      <Header />
      <Pods />
    </div>
  );
}

export default App;
