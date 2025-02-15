import Counter from "./component/counter";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Adrian Germeck</h1>
      <h4>Website is under construction</h4>
      <p>Only available at daytime</p>
      <p>Number of people visited</p>
      <Counter></Counter>
    </div>
  );
}
