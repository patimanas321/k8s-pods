import styles from './App.module.css';

import Header from './Components/Header';
import Pods from './Modules/Pods';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <div className={ styles.app } >
      <Header />
      <ErrorBoundary>
        <Pods />
      </ErrorBoundary>
    </div>
  );
}

export default App;
