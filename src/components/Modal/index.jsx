import { ModalOverlay, Modal as RACModal } from "react-aria-components/Modal";

export default function Modal({ children, props }) {
  return (
    <ModalOverlay
      {...props}
      className="absolute top-0 left-0 w-full h-(--page-height) isolate z-20 bg-black/50 text-center backdrop-blur-lg"
    >
      <div className="sticky top-0 left-0 w-full h-(--visual-viewport-height) px-3 flex items-center justify-center box-border">
        <RACModal
          {...props}
          className="w-full max-w-112.5 max-h-[calc(var(--visual-viewport-height)*0.9)] rounded-2xl bg-white dark:bg-neutral-800/70 dark:backdrop-blur-2xl dark:backdrop-saturate-200 forced-colors:bg-[Canvas] text-left align-middle text-neutral-700 dark:text-neutral-300 shadow-2xl bg-clip-padding border border-black/10 dark:border-white/10"
        >
          {children}
        </RACModal>
      </div>
    </ModalOverlay>
  );
}
