import "./App.css";
import Stylesheet from "./Components/Stylesheet";
import Inline from "./Components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";

function App() {
  return (
    <div className="App">
      <h1 className="error">Error: regular style </h1>
      <h1 className={styles.success}>Success: Module Style</h1>
      <Stylesheet primary={true} />
      <Inline />
    </div>
  );
}

export default App;
