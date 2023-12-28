import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Map from "@/components/MapServerside";
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
  const [dors, setDors] = useState(null);
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

          <div className={styles.mapclass}>
            <Map />
          </div>
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
          {/* {[
            {
              name: "hor1",
              id: "aiosdfjdsiaf",
              aisdfjsdi: "jisdofdio",
              accomodations: ["hot_water", "car_park"],
              price_range: "3000-7000",
            },
            {
              name: "hor2",
              id: "asidofj",
              aisdfjdsa: "iasdfjoidsa",
              accomodations: ["bike_park", "water_refiller"],
              description:
                "UUt quis cillum veniam do sit sunt irure nulla cupidatat proident duis do eiusmod qui. Do officia ullamco ut. Anim magna deserunt exercitation Lorem enim officia incididunt deserunt. Officia qui ex magna occaecat culpa deserunt irure est consectetur deserunt magna. Culpa sint ipsum culpa magna ad ullamco ex eu anim. Laborum laborum sint consequat.Ut quis cillum veniam do sit sunt irure nulla cupidatat proident duis do eiusmod qui. Do officia ullamco ut. Anim magna deserunt exercitation Lorem enim officia incididunt deserunt. Officia qui ex magna occaecat culpa deserunt irure est consectetur deserunt magna. Culpa sint ipsum culpa magna ad ullamco ex eu anim. Laborum laborum sint consequat.Ut quis cillum veniam do sit sunt irure nulla cupidatat proident duis do eiusmod qui. Do officia ullamco ut. Anim magna deserunt exercitation Lorem enim officia incididunt deserunt. Officia qui ex magna occaecat culpa deserunt irure est consectetur deserunt magna. Culpa sint ipsum culpa magna ad ullamco ex eu anim. Laborum laborum sint consequat.t quis cillum veniam do sit sunt irure nulla cupidatat proident duis do eiusmod qui. Do officia ullamco ut. Anim magna deserunt exercitation Lorem enim officia incididunt deserunt. Officia qui ex magna occaecat culpa deserunt irure est consectetur deserunt magna. Culpa sint ipsum culpa magna ad ullamco ex eu anim. Laborum laborum sint consequat.",
              price_range: "4000-5000",
            },
          ].map((hor) => {
            return (
              <div className="">
                {hor.name} | {hor.price_range} Baht
                <div style={{overflow: hidden, textOverflow: 'ellipsis', whiteSpace: nowrap}}>
                {hor.description}
                </div>
                {hor.accomodations.map((acc) => (
                  <div style={{}}>{acc}</div>
                ))}
              </div>
            );
            // return  hor.name
          })}
          {(dors).map} */}

          {dors?.dormitory?.map((d) => <div>{d.location}</div>)}
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
