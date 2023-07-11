function Content() {
  const handleButtonClick = () => {
    const inputText = document.getElementById("inputText").value;
    const displayArea = document.getElementById("displayArea");
    displayArea.innerText = inputText;
  };

  return (
    <div className="flex-grow">
      <div className="flex flex-col items-center p-4">
        <textarea id="inputText" className="border-2 p-2 mb-2 w-2/4 h-32"></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleButtonClick}>
          Display Text
        </button>
      </div>
      <div id="displayArea" className="mt-4 whitespace-pre-wrap"></div>
    </div>
  );
}

export default Content;
