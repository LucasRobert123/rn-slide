import { Home } from "@/screens/Home";
import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" />
      <Home />
    </Fragment>
  );
}
