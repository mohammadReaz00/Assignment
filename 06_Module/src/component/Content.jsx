import { useState } from "react";

function Content() {
  const [displayText, setDisplayText] = useState("");
  const [inputText, setInputText] = useState("");

  const handleButtonClick = () => {
    setDisplayText(inputText);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="flex-grow">
      <div className="flex flex-col items-center p-4">
        <textarea
          className="border-2 p-2 mb-2 w-2/4 h-32"
          onChange={handleInputChange}
          value={inputText}
        ></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleButtonClick}>
          Display Text
        </button>
      </div>
      {displayText && <pre className="mt-4 whitespace-pre-wrap">{`${displayText}`}</pre>}
    </div>
  );
}

export default Content;
