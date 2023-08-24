import React, { useState } from "react";
import "./App.css";
import Icon from "./Components/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [itemArray, updateItemArray] = useState([
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
  ]);
  const [isCross, setCross] = useState(false);
  const [Message, setWinMessage] = useState("");
  function changeItem(index, curBtn) {
    if (Message !== "") {
      toast(Message, { type: "success" });
    }
    if (itemArray[index] !== "empty") {
      return toast("already filled", { type: "error" });
    }
    let temp = itemArray;
    temp[index] = isCross ? "cross" : "circle";
    setCross(!isCross);
    updateItemArray(temp);
    checkIsWinner();
  }

  function reloadGame() {
    setCross(false);
    setWinMessage("");
    const temp = new Array(9).fill("empty");
    updateItemArray(temp);
  }

  function checkIsWinner() {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Wins`);
      toast(`${itemArray[0]} Wins`, { type: "success" });
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMessage(`${itemArray[3]} Wins`);
      toast(`${itemArray[3]} Wins`, { type: "success" });
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMessage(`${itemArray[6]} Wins`);
      toast(`${itemArray[6]} Wins`, { type: "success" });
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Wins`);
      toast(`${itemArray[0]} Wins`, { type: "success" });
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinMessage(`${itemArray[1]} Wins`);
      toast(`${itemArray[1]} Wins`, { type: "success" });
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} Wins`);
      toast(`${itemArray[2]} Wins`, { type: "success" });
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Wins`);
      toast(`${itemArray[0]} Wins`, { type: "success" });
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} Wins`);
      toast(`${itemArray[2]} Wins`, { type: "success" });
    }
  }

  return (
    <div>
      <h1 className="text-center">{Message}</h1>
      <button onClick={reloadGame}>Reload Game</button>
      <div className="gridContainer">
        {itemArray.map((value, index) => (
          <div
            className={
              itemArray[index] === "empty"
                ? "item_available"
                : "item_unavailable"
            }
            onClick={(curBtn) => changeItem(index, curBtn)}
          >
            <Icon name={itemArray[index]} />
          </div>
        ))}
      </div>
      <h1 className="text-center">
        {isCross ? "Cross Turns " : "Circle Turns"}
      </h1>
      <ToastContainer position="bottom-center" />
    </div>
  );
}
export default App;
