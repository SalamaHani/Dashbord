import { ChartBarLabelCustom } from "@/components/ChartBarLabelCustom";
import { ChartPieLabel } from "@/components/ChartPieLabel";

import SectiontPage from "@/components/SectiontPage";

function Reports() {
  return (
    <>
      <SectiontPage titel="Reports" />
      <div className="grid flex-1 scroll-mt-20 items-stretch gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">
        <ChartBarLabelCustom />
        <ChartPieLabel />
        <ChartBarLabelCustom />
        <ChartBarLabelCustom />
      </div>
    </>
  );
}
export default Reports;
