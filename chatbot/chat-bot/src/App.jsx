import { useState } from "react"; 
import generateContent from "./components/chatbot";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleGenerate = async () => {
    try {
      const result = await generateContent(prompt);
      setResponse(result);
    } catch (error) {
      console.error("Error generating content:", error);
      setResponse("Failed to generate content.");
    }
  };

  return (
    <div>
      <h1>Generative AI Example</h1>
      <textarea
        placeholder="Enter your prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      <button onClick={handleGenerate}>Generate</button>
      <div>
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default App;

