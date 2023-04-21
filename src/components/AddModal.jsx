import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import Form from "./Form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button sx={{ my: 2 }} onClick={() => setIsOpen(!isOpen)}>
        Add new item
      </Button>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form handleModal={setIsOpen} />
        </Box>
      </Modal>
    </div>
  );
}
