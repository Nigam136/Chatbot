import React from "react";
import "./App.css";
import ChatBot from "react-simple-chatbot";

function App() {
  const steps = [
    {
      id: "greet",
      message: "Hello welcome to chatbot",
      trigger: "name",
    },
    {
      id: "name",
      message: "please enter your name",
      trigger: "wait1",
    },
    {
      id: "wait1",
      user: true,
      trigger: "name1",
    },
    {
      id: "name1",
      message: "hii {previousValue}, please enter domain... ",
      trigger: "wait2",
    },

    {
      id: "wait2",
      user: true,
      trigger: "issue",
    },
    {
      id: "issue",
      message: "enter your {previousValue} related query...",
      trigger: "wait3",
    },
    {
      id: "wait3",
      user: true,
      trigger: "topic",
    },
    {
      id: "topic",
      message: "thanks! for telling your issue...",
      end: true,
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <ChatBot steps={steps} />
      </div>
    </div>
  );
}

export default App;
