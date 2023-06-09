import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { useCallback, useEffect, useState } from "react";

import Hoge from "../components/Hoge";

import { Headline } from "@/components/Headline";

import { Header } from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [foo, setFoo] = useState(1);

  const [text, setText] = useState("");

  const [isShow, setIsShow] = useState(true);

  const handleClick = (e) => {
    // setFoo((foo) => foo + 1);
    setFoo(function (foo) {
      return foo + 10;
    });
  };

  const [array, setArray] = useState([]);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      // const newArray = [...prevArray, 1];
      const newArray = prevArray;
      newArray.push()
      return newArray;
    });
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    console.log("mount");
    return () => {
      document.body.style.backgroundColor = "";
      console.log("unmount");
    };
  }, []);

  console.log(text);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <button onClick={handleClick}>BTN</button>
      <main className={styles.main}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <Headline title="Index page" />
        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>

        <button onClick={handleClick}>{foo}</button>

        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <button
          onClick={() => {
            setIsShow((isShow) => !isShow);
            // setIsShow((isShow) => {
            //   if (isShow === true) {
            //     return false;
            //   } else {
            //     return true;
            //   }
            // });
          }}
        >
          {isShow ? "show" : "hide"}
        </button>
        <Hoge />

        <button onClick={handleAdd}>add</button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </main>
    </>
  );
}
