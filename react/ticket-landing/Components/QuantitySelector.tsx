import { useCssHandles } from "vtex.css-handles";
import { HANDLES } from "../handles";

import { StepperProps } from "../interface";

const QuantitySelector: VTEXCustomComponent<StepperProps> = ({
  quantity,
  quantityHandler,
  unitMultiplier,
  measurementUnit,
}: StepperProps) => {
  const { handles: css } = useCssHandles(HANDLES);

  return (
    <div className={css.quantitySelector}>
      <button
        onClick={() => quantityHandler((q) => q - 1)}
        disabled={quantity <= 1}
        className={`${css.quantityButton} ${css.minusButton}`}
      >
        -
      </button>
      <div className={css.quantityDisplay}>
        {(quantity * unitMultiplier).toLocaleString("es-AR", {
          maximumFractionDigits: 2,
        })}
        {measurementUnit !== "un" && measurementUnit}
      </div>
      <button
        onClick={() => quantityHandler((q) => q + 1)}
        disabled={quantity <= 0}
        className={`${css.quantityButton} ${css.plusButton}`}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
