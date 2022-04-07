import type { NextPage } from "next";


const Home: NextPage = () => {
  const getDB = () => {
    console.log("DB!");
  };
  return (
    <div>
      <p onClick={getDB}>SAMPLE SITE</p>
    </div>
  );
};

export default Home;
