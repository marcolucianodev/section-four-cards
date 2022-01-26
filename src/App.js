import Header from "./components/Header";
import GlobalStyle from "./components/styles"
import Card from "./components/Card";



const App = ()  => {
  return (
    <>
      <Header titleFirt="Reliable, efficient delivery" titleSecond="Powered by Technology" desc="Our Artificial intelligence powered tools use millions of projects data points to ensure that your projects is successful"/>

      <div className="container">
        <div className="container--col-single">
          <Card cardTitle='Surpervisor' cardDesc='Monitors activity to identify project roadblocks' line='8px solid #45d3d3' imagem='./icon-supervisor.svg'/>
        </div>
        <div className="container--col-double">
          <Card cardTitle='Team Builder' cardDesc='Scan our talent network to create the optimal team for your project' line='8px solid #ea5353' imagem='./icon-team-builder.svg'/>
          <Card cardTitle='Karma' cardDesc='Regularly evaluates our talent to ensure quality' line='8px solid #fcaf4a' imagem='./icon-karma.svg'/>
        </div>
        <div className="container--col-single">
          <Card cardTitle='Calculator' cardDesc='Uses data from past projects to provide better delivery estimates' line='8px solid #549ef2' imagem='./icon-calculator.svg'/>
        </div>
          
      </div>

      <GlobalStyle />
    </>
  );
}

export default App;
