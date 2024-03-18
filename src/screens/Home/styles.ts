import { Dimensions, StyleSheet } from "react-native";

export const CARD_WIDTH = Dimensions.get("window").width * 0.85;
export const CARD_HEIGHT = 200;
export const CARD_SPACING = 12;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  flatList: {
    flexGrow: 0,
    height: 200,
  },
  contentFlatList: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 8,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "#f1f1f1",
    borderRadius: 16,
    marginRight: CARD_SPACING,
  },
  indexes: {
    marginTop: 16,
    justifyContent: "center",
    gap: 8,
    flexDirection: "row",
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#f1f1f1",
  },
  bulletActive: {
    backgroundColor: "black",
  },
});
