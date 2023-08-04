import GitHubCalendar from "react-github-calendar";

import "./activity.css";

const Activity = ({ theme }) => {
  return (
    <>
      <div className="activity-chart">
        <GitHubCalendar
          username="umairjibran"
          weekStart={1}
          hideTotalCount={true}
          hideColorLegend={true}
          blockRadius={10}
          blockSize={40}
          fontSize={40}
          blockMargin={10}
          hideMonthLabels={true}
          theme={{
            light: ["hsl(0, 0%, 92%)", "firebrick"],
            dark: ["#333", "rgb(100, 255, 255)"],
          }}
          labels={{
            weekdays: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
          }}
        />
      </div>
    </>
  );
};

export default Activity;
