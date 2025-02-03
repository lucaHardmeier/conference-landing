import { useCssHandles } from "vtex.css-handles";

const WishlistPopup = ({ setModal, modal }) => {
  const { handles: css } = useCssHandles([
    "modalBackdrop",
    "wishlistModal",
    "messageContainer",
    "modalClose",
    "modalTitle",
    "modalBodyText",
    "loginButton",
    "refuseButton",
  ]);

  const isSession = modal === "session";

  const title = isSession ? "Estás ingresando al Catálogo Digital" : "Ingresá a tu cuenta";
  const bodyText = isSession
    ? "Registrate o iniciá sesión para poder agregar productos a tus favoritos."
    : "Registrate o iniciá sesión para poder agregar productos a tus favoritos.";
  const refuseText = isSession ? "Continuar sin iniciar sesión" : "Seguir mirando";

  return (
    <dialog className={css.modalBackdrop} onClick={() => setModal(false)} open={!!modal}>
      <div className={css.wishlistModal} onClick={(e) => e.stopPropagation()}>
        <div className={css.messageContainer}>
          <h4 className={css.modalTitle}>{title}</h4>
          <p className={css.modalBodyText}>{bodyText}</p>
          <a href="/login" className={css.loginButton}>
            Iniciá sesión
          </a>
          <button className={css.refuseButton} onClick={() => setModal(false)}>
            {refuseText}
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default WishlistPopup;
