import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";

const AiwithText = () => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyBfizIVkFzxgzC1hE2xoUbjfeq1yWOMIa4"
  );

  const [search, setSearch] = useState("");
  const [aiResponse, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function aiRun() {
    setLoading(true);
    setResponse("");
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Meals related to ${search} with prices in INR. Also show the ingedients of that food. Tell how the food can elevate your mood. Answer in attactive and funny way.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setResponse(text);
    setLoading(false);
  }

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    aiRun();
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <input
          placeholder="Search Your Preffered Cuisine"
          onChange={(e) => handleChangeSearch(e)}
        />
        <button style={{ marginLeft: "20px" }} onClick={() => handleClick()}>
          Search
        </button>
      </div>

      {loading === true && aiResponse === "" ? (
        <p style={{ margin: "30px 0" }}>Loading ...</p>
      ) : (
        <div style={{ margin: "30px 0" }}>
          <ReactMarkdown>{aiResponse}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default AiwithText;
