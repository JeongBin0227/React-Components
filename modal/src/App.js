import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { MyComponent, MyModal } from "./MyComponent.js";
import { MyModal } from "./MyComponent.js";

const footer = (close) => {
  return (
    <button className="close" onClick={close}>
      close
    </button>
  );
};

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      {/* <MyComponent /> */}
      <button onClick={openModal}>모달팝업</button>
      <MyModal
        open={modalOpen}
        close={closeModal}
        header="Modal heading"
        footer={footer(closeModal)}
      >
        팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
      </MyModal>
    </div>
  );
}

export default App;
