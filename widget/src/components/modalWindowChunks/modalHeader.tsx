import STYLES from "../../constants/styles";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { ModalContext } from "../../containers/modalContainer";
import { ModalHeaderProps } from "../../types/types";

export default function ModalHeader({ title }: ModalHeaderProps) {
  return (
    <ModalContext.Consumer>
      {({ handleClose }) => {
        return (
          <div style={STYLES.tools}>
            <div className="headerTitle">{title}</div>
            <div className="headerButton">
              <Button onClick={handleClose}>
                <CloseIcon style={STYLES.icons} />
              </Button>
            </div>
          </div>
        );
      }}
    </ModalContext.Consumer>
  );
}
