import Head from "next/head";
import BattleOfMonsters from "@/components/BattleOfMonsters/BattleOfMonsters";

export default function Home() {
  return (
    <>
      <Head>
        <title>Battle of Monsters</title>
        <meta name="description" content="Battle of Monsters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BattleOfMonsters />
        {/* kkkkdsfdsffffffkkk */}
      </main>
    </>
  );
}
