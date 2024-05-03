"use client";

import React, { useRef, FC, useEffect, ReactNode } from "react";

import styles from "./styles.module.css";
import { Close } from "@/assets/icons";

type Props = {
  children: ReactNode;
  title: string | undefined;
  onClose: () => void;
  isOpen: boolean;
};

export const Modal: FC<Props> = ({ children, title, onClose, isOpen }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    isOpen ? modalRef.current?.showModal() : modalRef.current?.close();
  }, [isOpen]);

  return (
    <dialog ref={modalRef} className={styles.modal} onClose={onClose}>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <h2>{title}</h2>

          <Close onClick={onClose} />
        </div>
      </div>
      <div className={styles.childWrapper}>{children}</div>
    </dialog>
  );
};
