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

// export const MyComponent = (props) => {
//   let subtitle;
//   const { open, close, header, footer } = props;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = "#f00";
//   }

//   function closeModal() {
//     close(false);
//   }

//   return (
//     <div>
//       <button onClick={openModal}>Open Modal</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         contentLabel="Example Modal"
//       >
//         <header>
//           <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{header}</h2>
//           <button className="close" onClick={closeModal}>
//             {" "}
//             &times;{" "}
//           </button>
//         </header>
//         <main>{props.children}</main>
//         <footer>
//           {footer}
//           <button className="close" onClick={closeModal}>
//             {" "}
//             close{" "}
//           </button>
//         </footer>
//         {/* <form>
//           <input />
//           <button>tab navigation</button>
//           <button>stays</button>
//           <button>inside</button>
//           <button>the modal</button>
//         </form> */}
//       </Modal>
//     </div>
//   );
// };

export const MyModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, footer } = props;
  const modalEl = useRef();
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal(target) {
    console.log(open);
    if (open && !modalEl.current.contains(target)) close(false);
    // close(false);
  }
  useEffect(() => {
    window.addEventListener("click", closeModal);
    return () => {
      window.removeEventListener("click", closeModal);
    };
  }, []);
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    open && (
      <Modal
        className={open ? "openModal modal" : "modal"}
        isOpen={open}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ref={modalEl}
      >
        {/* <div className={open ? "openModal modal" : "modal"}> */}
        {/* {open ? ( */}
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              {" "}
              &times;{" "}
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button className="close" onClick={close}>
              {" "}
              close{" "}
            </button>
          </footer>
        </section>
        {/* ) : null} */}
        {/* </div> */}
      </Modal>
    )
  );
};
