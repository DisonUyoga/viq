import { priceFormating } from "../utils/price";

export default function PriceFormat({ price }) {
  return (
    <>
      <span className="card-text">{priceFormating(price)}</span>
    </>
  );
}
