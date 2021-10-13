const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  tools: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalRows: {
    display: "flex",
    marginTop: "5px",
  },
  icons: {
    color: "black",
  },
  item: {
    background: "#ccc",
    width: "200px",
    margin: "10px 0px",
  },
  itemList: {
    height: "300px",
    overflow: "auto",
  },
  ul: {
    position: "relative",
    listStyle: "none",
    padding: "0px",
    marginRight: "5px",
  },
  itemView: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "150px",
    background: "#ccc",
    paddingLeft: "10px",
    margin: "0px 5px",
  },
  itemViewList: {
    display: "flex",
    listStyle: "none",
    padding: "0px",
    margin: "5px 0px",
  },
};

export default styles;
