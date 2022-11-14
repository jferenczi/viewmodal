import { useEffect, useRef } from "react";

type Props = {
  setModalState: (value: boolean) => void;
}

export default function Modal({setModalState}: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  /** click event outside of the modal-content */
  const handleClickOutside = (event:MouseEvent) => {
    console.log(event.target);
    if (modalRef?.current && !modalRef.current.contains(event.target as Node)) {
      setModalState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={"modal-container"}>
      <div
        className={"modal-content"}
        ref={modalRef}
        role="alertdialog"
        aria-labelledby="dialog_label"
        aria-describedby="dialog_desc"
        aria-modal="true"
      >
        <div className={"modal-header"}>
          <h2 className={"modal-title"} id="dialog_label">
            Modal window
          </h2>
          <button type="button" onClick={() => setModalState(false)}>
            Close
          </button>
        </div>
        <div id="dialog_desc">
          <p>This is a simple modal</p>
          <p>
            You can close it with the button on the right corner or click on the grey section on the page
          </p>
        </div>
      </div>
    </div>
  );
}
