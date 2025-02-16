import Counter from "./component/counter";
import LightBulb from "./component/lightbulb";
import CustomNavbar from "./component/navbar";

export default function Home() {
  return (
    <>
      <CustomNavbar></CustomNavbar>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <LightBulb></LightBulb>
      </div>
    </>
  );
}
