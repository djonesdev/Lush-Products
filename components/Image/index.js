import Image from "next/image";

import productFallBackImage from "public/images/productFallBackImage.jpg";

export default function ImageWithFallBack({
  alt,
  src,
  productName,
  width,
  height,
  onClick, 
  dataTestId
}) {
  return (
    <Image
      src={src || productFallBackImage}
      alt={alt || productName}
      width={width || 500}
      height={height || 500}
      priority
      onClick={onClick}
      data-testid={dataTestId}
    />
  );
}
