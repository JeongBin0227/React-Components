import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
  },
};

export const MyModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, footer } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    open && (
      <Modal
        className={open ? "openModal modal" : "modal"}
        isOpen={open}
        onRequestClose={close}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              {" "}
              &times;{" "}
            </button>
          </header>
          <main>{props.children}</main>
          <footer>{footer}</footer>
        </section>
      </Modal>
    )
  );
};
