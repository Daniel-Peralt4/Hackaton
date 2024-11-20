import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

const generateContent = async (prompt) => {
  const maxRetries = 3; // Maximum number of retries
  let attempts = 0;
  const delay = 3000; // Delay between retries in milliseconds (3 seconds)

  while (attempts < maxRetries) {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      return result.response.text(); // Return the generated text
    } catch (error) {
      attempts++;
      console.error(`Attempt ${attempts} failed:`, error);

      // If we've reached the maximum retries or the error is specifically a 503 (Service Unavailable), throw an error
      if (attempts >= maxRetries || error.message.includes("503")) {
        throw new Error("The model is overloaded. Please try again later.");
      }

      // Wait before the next attempt
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

export default generateContent;