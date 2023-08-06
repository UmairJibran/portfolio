import GitHubCalendar from "react-github-calendar";
import GitHubActivityView from "../../containers/githubActivity/githubActivityView";

import "./activity.css";

const Activity = ({ theme }) => {
  return (
    <>
      <div className="activity-chart">
        <GitHubCalendar
          username="umairjibran"
          hideTotalCount={true}
          hideColorLegend={true}
          blockRadius={10}
          blockSize={40}
          fontSize={40}
          blockMargin={10}
          hideMonthLabels={true}
        />
        <GitHubActivityView theme={{ theme }} />
      </div>
    </>
  );
};

export default Activity;
