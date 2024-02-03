import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactNode } from "react";

interface BasicModalProps {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  children: ReactNode;
  title: string;
  width?: number;
}

export default function BasicModal({
  handleClose,
  handleOpen,
  open,
  title,
  children,
  width,
}: BasicModalProps) {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width ? width : 1500,
    bgcolor: "background.paper",
    boxShadow: 24,
    // maxHeight:800,
    overflowY: "scroll",
    p: 4,
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography mb={5} variant={"h3"}>
            {title}
          </Typography>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: 10, top: 10 }}
          >
            <CloseIcon fontSize={"medium"} />
          </IconButton>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
