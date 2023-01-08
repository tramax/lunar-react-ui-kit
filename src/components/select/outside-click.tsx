import React from 'react';

export default function listenForOutsideClicks(
  listening: boolean,
  setListening: (listening: boolean) => void,
  menuRef: React.RefObject<HTMLDivElement>,
  setOpen: (open: boolean) => void
) {
  return () => {
    if (listening) return;

    if (!menuRef.current) return;

    setListening(true);

    ['click', 'touchstart'].forEach((type) => {
      document.addEventListener('click', (evt) => {
        const cur = menuRef.current;
        const node = evt.target as Node;

        if (cur) {
          if (cur.contains(node)) return;
        }

        setOpen(false);
      });
    });
  };
}
