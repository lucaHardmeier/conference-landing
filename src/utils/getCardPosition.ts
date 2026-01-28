const getCardPosition = ({
  pxPositionX,
  pxPositionY,
  dotRadius,
  containerSize,
  axes,
  isSmall,
}: {
  pxPositionX: number;
  pxPositionY: number;
  dotRadius: number;
  containerSize: {
    width: number;
    height: number;
  };
  axes: { x: number; y: number };
  isSmall: boolean;
}) => {
  const margin = isSmall ? 6 : 8;
  const cardWidth = isSmall ? 272 : 306;
  const { x, y } = axes;

  let cardPosX = 0;
  let cardPosY = {};

  if (isSmall && x > 15 && x < 85) {
    const defaultPosX = pxPositionX - cardWidth / 2;
    cardPosX =
      defaultPosX < margin
        ? margin
        : defaultPosX + cardWidth + margin > containerSize.width
          ? containerSize.width - cardWidth - margin
          : defaultPosX;
    cardPosY =
      y < 50 ? { bottom: pxPositionY + dotRadius + margin } : { top: containerSize.height - pxPositionY + dotRadius + margin };
  } else {
    cardPosX = x < 60 ? pxPositionX + dotRadius + margin : pxPositionX - dotRadius - margin - cardWidth;
    cardPosY = y < 60 ? { bottom: pxPositionY - dotRadius } : { top: containerSize.height - pxPositionY - dotRadius };
  }

  return { cardPosX, cardPosY, cardWidth };
};

export default getCardPosition;
