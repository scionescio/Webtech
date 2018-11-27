const styles = {
  background: {
    backgroundColor: "white",
    maxWidth: "960px",
    minHeight: "400px",
    margin: "2em",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "1em",
    borderRadius: "20px",
    boxShadow: "10px 10px 60px 2px #545454"
  },
  backgroundHeader: {
    backgroundColor: "#bdbdbd",
    maxWidth: "960px",
    height: "100%",
    padding: "1em",
    marginLeft: "auto",
    marginRight: "auto"
  },
  backgroundFooter: {
    backgroundColor: "white",
    maxWidth: "960px",
    height: "10%",
    padding: "1em",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "right"
  },
  formHeader: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    backgroundColor: "rgba(63, 35, 43, 0.8)",
    padding: [20, 0],
    color: "white",
    fontWeight: 200,
    width: "100%"
  },
  header: {
    border: [10, 10, 10, 10],
    textAlign: "center",
    display: "block",
    fontSize: 25,
    fontFamily: "OpenSans, sans-serif",
    fontWeight: 300,
    textDecoration: "none",
    color: "rgba(63, 35, 43, 0.8)"
  },
  headerBig: {
    margin: [10],
    padding: [30, 10, 10, 10],
    textAlign: "center",
    display: "block",
    fontSize: 25,
    fontFamily: "OpenSans, sans-serif",
    fontWeight: 300,
    textDecoration: "none",
    color: "rgba(63, 35, 43, 0.8)"
  },
  navigation: {
    textAlign: "center",
    width: "150px",
    display: "inline-block",
    margin: [10],
    fontSize: 25,
    fontFamily: "OpenSans, sans-serif",
    fontWeight: 300,
    textDecoration: "none",
    color: "rgba(63, 35, 43, 0.8)",
    "&:hover": {
      textDecoration: "underline",
      color: "black"
    }
  },
  navigationFooter: {
    textAlign: "center",
    width: "150px",
    margin: [10],
    fontSize: 15,
    fontFamily: "OpenSans, sans-serif",
    fontWeight: 300,
    textDecoration: "none",
    color: "rgba(63, 35, 43, 0.8)",
    "&:hover": {
      textDecoration: "underline",
      color: "black"
    }
  },
  image: {
    height: 400,
    width: "600",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    overflow: "hidden"
  },
  video: {
    marginLeft: "auto",
    marginRight: "auto",
    height: 400,
    width: 600
  },
  containerWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    margin: [10, 10, 0, 10],
    padding: [0, 24],
    minHeight: "70%",
    width: 600,
    maxHeight: "80%"
  },
  inputAndOption: {
    textAlign: "left",
    width: 300,
    padding: [0, 10],
    border: "none",
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderBottom: "1px solid white",
    lineHeight: 2,
    fontSize: 15,
    margin: "auto"
  },
  form: {
    padding: "1em",
    align: "center"
  },
  button: {
    margin: 10,
    padding: [15, 100],
    fontFamily: "Roboto, sans-serif",
    color: "white",
    backgroundColor: "rgba(128, 136, 99, 0.9)",
    cursor: "pointer",
    border: "none",
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 5,
    width: 300
  },
  outerWrapper: {
    margin: "auto",
    display: "block",
    textAlign: "center",
    position: "relative",
    paddingBottom: 20
  },
  innerWrapper: {
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 140
  },
  skill: {
    fontWeight: 200,
    paddingRight: 5,
    fontFamily: "Roboto, sans-serif"
  },
  selectHead: {
    display: "inline",
    textAlign: "left",
    width: 300,
    margin: "auto"
  },
  select: {
    width: 60,
    fontWeight: 600,
    fontFamily: "Roboto, sans-serif",
    color: "rgba(63, 35, 43, 0.8)",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    display: "block"
  },
  footer: {
    bottom: 10,
    margin: [10]
  },
  tableEntry: {
    width: "5px"
  },
  mapGoogle: {
    height: 100,
    width: "100%"
  }
};

export default styles;
