import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./GithubRepoCard.css";

export default function GithubRepoCard({ repo, theme }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function openRepoInNewTab(url) {
    var win = window.open(url, "_blank");
    handleClose();
    win.focus();
  }

  return (
    <div>
      <Card
        sx={{ maxWidth: 500, height: 200, margin: "auto" }}
        key={repo.id}
        onClick={() => handleOpen()}
      >
        <CardContent>
          <div className="cardHeader">
            <div className="card-logo">
              <img
                className="myimage"
                src={require(`../../assets/projects/logos/${repo.logo}.png`)}
                alt={repo.name}
              ></img>
            </div>
            <h3 className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </h3>
          </div>
          {repo.technologies.map((tech) => {
            return (
              <Chip
                label={tech}
                variant="outlined"
                size="small"
                className="language-chip"
              />
            );
          })}
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            height: "auto",
          }}
        >
          <div className="icon-bar">
            <i
              className="fas fa-external-link-alt"
              id="arrow"
              aria-hidden="true"
              onClick={() => openRepoInNewTab(repo.url)}
            />
            <i
              className="fas fa-times"
              id="arrow"
              aria-hidden="true"
              onClick={() => handleClose()}
            />
          </div>
          <h2 id="modal-modal-title">{repo.name}</h2>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
        </Box>
      </Modal>
    </div>
  );
}
