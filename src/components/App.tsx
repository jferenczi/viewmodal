import { useEffect, useState, useRef } from "react";
import "./App.css";
import Modal from "./Modal";

export default function App() {
  const [isModalOpened, setModalOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  /* 
  set body and button inactive when modal opened
  it is nor enough to cover every posibility actions 
  for example click on any other elements or make tabbing,
  it is only for prevent clock on the button or scroll
  */
  useEffect(() => {
    if (isModalOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      /* close modal come back to page with focus on the button button to focus */
      buttonRef?.current?.focus();
    }
  }, [isModalOpened]);
  return (
    <div className="App">
      <h1>Modal test</h1>
      <button
        type="button"
        ref={buttonRef}
        onClick={() => setModalOpen(true)}
        disabled={isModalOpened}
      >
        Let’s see a modal
      </button>
      {isModalOpened && <Modal setModalState={setModalOpen} />}
    </div>
  );
}
