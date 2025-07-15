import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getBase64 } from "../helpers/imageHelper";
import ReactMarkdown from "react-markdown";

const AiwithImage = () => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyBfizIVkFzxgzC1hE2xoUbjfeq1yWOMIa4"
  );

  const [image, setImage] = useState("");
  const [imageInineData, setImageInlineData] = useState("");
  const [aiResponse, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   * Generative AI Call to fetch image insights
   */
  async function aiImageRun() {
    setLoading(true);
    setResponse("");
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const result = await model.generateContent([
      "Identify what kind of food items there are in the first image. Then show the nutritional value of the food shown in the image. Tell the history of the food in brief. Don't reply if there is no food in the image. Show the components of the food.",
      imageInineData,
    ]);
    const response = await result.response;
    const text = response.text();
    setResponse(text);
    setLoading(false);
  }

  const handleClick = () => {
    aiImageRun();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // getting base64 from file to render in DOM
    getBase64(file)
      .then((result) => {
        setImage(result);
      })
      .catch((e) => console.log(e));

    // generating content model for Gemini Google AI
    fileToGenerativePart(file).then((image) => {
      setImageInlineData(image);
    });
  };

  // Converts a File object to a GoogleGenerativeAI.Part object.
  async function fileToGenerativePart(file) {
    const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.readAsDataURL(file);
    });

    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  }

  return (
    <div>
      <div>
        <div style={{ display: "flex" }}>
          <input type="file" onChange={(e) => handleImageChange(e)} />
          <button style={{ marginLeft: "20px" }} onClick={() => handleClick()}>
            Search
          </button>
        </div>
        <img src={image} alt="" style={{ width: "30%", marginTop: 30 }} />
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

export default AiwithImage;
