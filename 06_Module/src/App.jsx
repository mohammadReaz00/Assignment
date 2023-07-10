import Header from "./component/Header";
import Content from "./component/Content.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="My Text Box" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
