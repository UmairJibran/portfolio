import { Zoom } from "react-reveal";
import "./stats.css";

import GithubActivity from "../../components/githubActivity/activity";

const StatsComponent = ({ theme }) => {
  return (
    <div className="stats-main pt-10" id="Stats">
      <div className="basic-stats">
        <Zoom duration={500}>
          <div className="stats-heading-div">
            <div className="stats-heading-text-div">
              <h1
                className="stats-heading-text mb-10"
                style={{ color: theme.text }}
              >
                Around the "git"
              </h1>
              <GithubActivity theme={{ theme }} />
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default StatsComponent;