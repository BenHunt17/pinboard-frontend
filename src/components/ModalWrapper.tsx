import { Box, Modal, useTheme } from "@mui/material";

interface ModalProps {
  children: React.ReactElement;
  open: boolean;
  onClose: () => void;
}

export default function ModalWrapper({ children, open, onClose }: ModalProps) {
  const theme = useTheme();

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          width: "40%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: 4,
          borderRadius: 10,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
}
