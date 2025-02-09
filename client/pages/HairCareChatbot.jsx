import React, { useState } from "react";
import './css/HairCareChatbot.css'; // Import the CSS file

const HairCareChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [advice, setAdvice] = useState("Click below to get a hair care tip!");
  const [loading, setLoading] = useState(false);

  const fetchHairCareTip = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo", // Or gpt-4
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: "Give me a random hair care tip." },
          ],
        }),
      });

      if (response.status === 429) {
        const retryAfter = response.headers.get("Retry-After") || 30;
        setAdvice(`Rate limit exceeded. Retrying in ${retryAfter} seconds...`);
        setTimeout(fetchHairCareTip, retryAfter * 1000);
        return;
      }

      const data = await response.json();
      if (data.choices && data.choices[0].message.content) {
        setAdvice(data.choices[0].message.content.trim());
      } else {
        setAdvice("Sorry, we couldn't fetch a tip at the moment. Try again later!");
      }
    } catch (error) {
      setAdvice("Error fetching data. Please check your connection.");
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div>
      {/* Floating Chatbot Button */}
      <button
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>

      {/* Chatbot Popup */}
      {isOpen && (
        <div className="chatbot-popup">
          <h2>Hair Care Assistant</h2>
          <p>{advice}</p>
          <button
            onClick={fetchHairCareTip}
            disabled={loading}
          >
            {loading ? "Fetching..." : "Get a Hair Care Tip"}
          </button>
          <button
            className="close-button"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default HairCareChatbot;