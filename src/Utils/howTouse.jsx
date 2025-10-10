"use client";
import React, { useState } from "react";
import Modal from "../common/Modal";
import Button from "../common/Button";

export default function NewsletterModal() {
  const [open, setOpen] = useState(false);

  return (
    <section className="p-10">
      <Button label="Open Modal" onClick={() => setOpen(true)} />

      <Modal isOpen={open} onClose={() => setOpen(false)} title="Join Newsletter">
        <p className="text-gray-600 mb-4">
          Subscribe to get updates about new products and discounts!
        </p>
        <Button
          label="Subscribe"
          variant="primary"
          onClick={() => {
            console.log("Subscribed!");
            setOpen(false);
          }}
        />
      </Modal>
    </section>
  );
}
