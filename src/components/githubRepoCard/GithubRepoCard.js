import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import { Fade } from "react-reveal";

import "./GithubRepoCard.css";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={2000} distance="40px">
      <Card
        sx={{ maxWidth: 500, height: 300, margin: "auto" }}
        key={repo.id}
        onClick={() => openRepoInNewTab(repo.url)}
      >
        <CardContent>
          <div className="cardHeader">
            <CardMedia component="img" image={repo.logo} sx={{width: 50, height: 50, margin: 2}} />
            <h3 className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </h3>
          </div>
          {repo.languages.map((logo) => {
            console.log(logo);
            return (
              <Chip
                label={logo.name}
                variant="outlined"
                size="small"
                className="language-chip"
              />
            );
          })}
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </Card>
    </Fade>
  );
}

// import React from "react";
// import "./GithubRepoCard.css";

// export default function () {

//   return (
//     <div>
//
//         <div
//           className="repo-card-div"
//         >
//           <div className="repo-name-div">
//             <svg
//               aria-hidden="true"
//               className="octicon repo-svg"
//               height="16"
//               role="img"
//               viewBox="0 0 12 16"
//               width="12"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
//               ></path>
//             </svg>
//           </div>
//           <div className="repo-details">

//           </div>
//         </div>
//       </Fade>
//     </div>
//   );
// }
