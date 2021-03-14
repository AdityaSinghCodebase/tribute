import Home from "./Componets/Home";
import useStyle from "./Styles";

function App() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      {/* Navbar */}
      {/* Components */}
      {/* Footer */}
      <Home />
    </div>
  );
}

export default App;
