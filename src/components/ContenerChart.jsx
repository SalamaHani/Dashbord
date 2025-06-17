import { useState } from "react";
import { ChartAreaInteractive } from "./ChartAreaInteractive";
import styled from "styled-components";
import { ChartBarInteractive } from "./ChartBarInteractive";
function ContenerChart() {
  const [chart, setchart] = useState(true);
  return (
    <Wrapper>
      <button
        className=" mt-4 bg-white text-black hover:text-white  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white dark:hover:bg-gray-300 dark:text-black dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={() => setchart(!chart)}
      >
        Chart Line
      </button>
      {chart ? <ChartAreaInteractive /> : <ChartBarInteractive />}
    </Wrapper>
  );
}
export default ContenerChart;

const Wrapper = styled.section`
  margin-top: 1rem;
  text-align: center;
  button {
    cursor: pointer;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`;
