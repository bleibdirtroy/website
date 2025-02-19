import CustomNavbar from "./components/navbar/navbar";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <CustomNavbar></CustomNavbar>
      <Image src="/me.jpg" alt="me" width={500} height={500} quality={85} />
    </>
  );
}
