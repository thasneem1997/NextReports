import ReportsDialog from "./components/ReportsDialog";

import ReportsData from "./data/ReportsData";

export default function Home() {
  return (
    <main>
     <ReportsDialog reports={ReportsData}/>
    </main>
  );
}
