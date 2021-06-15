import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Result: {
    marginHorizontal: "10%",
    backgroundColor: "#6C63FF",
    color: "#fff",
    paddingVertical: "5%",
    marginTop: "10%",
    borderRadius: 10,
    alignItems: "center",
  },
  ongoing: {
    color: "white",
    fontSize: 25,
    marginBottom: "4%",
    marginHorizontal: "4%",
    fontWeight: "bold",
    textAlign:'center'
  },
  click: {
    color: "white",
    fontSize: 20,
    // fontWeight:'bold',
    // width:250,
    marginHorizontal: "5%",
    textAlign: "center",
  },
  view: {
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 20,
    marginTop: "11%",
    padding: "4%",
    paddingHorizontal: "6%",
    textAlign: "center",
  },
  Election: {
    marginHorizontal: "10%",
    backgroundColor: "#6C63FF",
    color: "#fff",
    paddingVertical: "9%",
    // height:"35%",
    marginTop: "18%",
    borderRadius: 10,
    alignItems: "center",
  },
});

export default css;
