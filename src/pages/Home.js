import React, { useState } from "react";
import AiwithText from "../components/AiwithText";
import AiwithImage from "../components/AiwithImage";

alert("This Website Is Not For Mobile");

const Home = () => {
  const [aiWith, setLAiWith] = useState("text");

  const handleAiWith = (value) => {
    setLAiWith(value);
  };

  return (
    <div>
      <h1>Aahar AI 🍱</h1>
      <p>Built with ❤️ by Megh</p>

      <div style={{ margin: "30px 0" }}>
        <button
          onClick={() => handleAiWith("text")}
          className={aiWith === "text" ? "aiWithActive" : ""}
        >
          Food For Your Mood
        </button>

        <button
          style={{ marginLeft: "20px" }}
          className={aiWith === "image" ? "aiWithActive" : ""}
          onClick={() => handleAiWith("image")}
        >
          What Is In Your Food ?
        </button>
      </div>

      {aiWith === "text" ? <AiwithText /> : <AiwithImage />}
    </div>
  );
};

export default Home;
