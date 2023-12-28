import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Map from "@/components/Map";
const getDors = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/dormitory", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    } else {
      console.log("Information complete");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default function Home() {
  const [dors, setDors] = useState();
  useEffect(() => {
    getDors().then((d) => {
      setDors(d);
    });
  }, []);
  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.homeimg}>
          <Image
            src="/condo_homepage.jpg"
            width={1239}
            height={350}
            alt="img"
          />
        </div>
        <h1>hi</h1>
        test
        <div className={styles.map}>
          <div className={styles.mapfunction}>
            <div></div>

            <span className={styles.mapfunction1}>
              <Link href="#">
                LOCATION
                <br />
                <b>Ladkrabang ,1112</b>{" "}
              </Link>
            </span>

            <div></div>

            <div className={styles.mapfunction2}>
              <div></div>
              <Link href="#">
                <div>EXPOLOR MORE </div>{" "}
              </Link>
              <Link href="#">
                <Image
                  src="/Building.png"
                  width={40}
                  height={40}
                  alt="logo"
                ></Image>
              </Link>
              <div></div>
            </div>

            <div></div>

            <Link href="#">
              <div className={styles.mapfunction3}>see all</div>
            </Link>

            <div></div>
          </div>

          <div className={styles.mapclass}><Map/></div>
        </div>

        <div className={styles.room_function}>
          <div className={styles.room_btn}>
            <Link href="/">Top Range</Link>
          </div>
          <div className={styles.room_btn}>
            <Link href="/">Suggest</Link>
          </div>
          <div></div>
        </div>

        <div className={styles.roomcomponents}>
          <h1>Room components</h1>

          {JSON.stringify(dors)}
        </div>

        <div>room recomment</div>
        <Link href="/testpage">
          a<h1>WEB TEST</h1>
        </Link>
        <hr />
        <Link href="/pages/test2">
          d<h1>POST TEST</h1>
        </Link>
      </div>
    </div>
  );
}
