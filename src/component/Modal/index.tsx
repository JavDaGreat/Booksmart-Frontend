"use client";

import React, { useRef, FC, useEffect, ReactNode } from "react";

import styles from "./styles.module.css";
import { Close, Edit } from "@/assets/icons";
import { Button } from "@component";

type Props = {
  children: ReactNode;
  title: string | undefined;
  onClose: () => void;
  isOpen: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  type?: string;
};

export const Modal: FC<Props> = ({
  children,
  title,
  onClose,
  isOpen,
  onEdit,
  onDelete,
  type,
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    isOpen ? modalRef.current?.showModal() : modalRef.current?.close();
  }, [isOpen]);

  return (
    <dialog ref={modalRef} className={styles.modal} onClose={onClose}>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <div className={styles.iconWrapper}>
            {(type === "show" || type === "new") && <Edit onClick={onEdit} />}
            <Close onClick={onClose} />
          </div>
        </div>
      </div>
      <div className={styles.childWrapper}>{children}</div>
      <div className={styles.actionBar}>
        <Button onClick={onDelete} label="Delete" />
        {type === "edit" && <Button onClick={onEdit} label="Edit" />}
      </div>
    </dialog>
  );
};
