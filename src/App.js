import Description from "./components/Company/Description";
import Dividend from "./components/Dividend/Dividend";
import FinancialHealth from "./components/FinancialHealth/FinancialHealth";
import Footer from "./components/Footer/Footer";
import FutureGrowth from "./components/FutureGrowth/FutureGrowth";
import Grade from "./components/Grade/Grade";
import OptionActivity from "./components/OptionActivity/OptionActivity";
import PastPerformance from "./components/PastPerformance/PastPerformance";
import PeerGrade from "./components/PeerGrade/PeerGrade";
import RecentNews from "./components/RecentNews/RecentNews";
import StockGraph from "./components/StockGraph/StockGraph";
import Title from "./components/Title/Title";
import Valuation from "./components/Valuation/Valuation";

function App() {
  return (
    <div className="bg-gray-200">
      <Title />
      <Description />
      <StockGraph />
      <Grade />
      <PeerGrade />
      <FutureGrowth />
      <Valuation />
      <FinancialHealth />
      <Dividend />
      <PastPerformance />
      <OptionActivity />
      <RecentNews />
      <Footer />
    </div>
  );
}

export default App;
