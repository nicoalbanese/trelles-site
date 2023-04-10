"use client";
import SignUpModal from "./components/SignUpModal";
import Notification from "./components/Notification";
import { useState } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  return (
    <>
      <Notification show={notificationOpen} setShow={setNotificationOpen} />
      <SignUpModal open={modalOpen} setOpen={setModalOpen} activateNotification={() => setNotificationOpen(true)} />
      <p>trelles is coming soon</p>
      <button
        onClick={() => setModalOpen(true)}
        className="text-green-600 hover:text-green-800 transition ease-in-out duration-300"
      >
        sign up for early access →
      </button>
    </>
  );
}
