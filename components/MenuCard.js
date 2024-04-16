import { ITEM_IMG_URL } from "../utils/constants";

const MenuCard = (item) => {
  const { name, description, defaultPrice, imageId } = item.item;
  const truncatedDescription = description.split(" ").slice(0, 20).join(" ");
  const formattedDescription =
    description.split(" ").length > 20
      ? truncatedDescription + "..."
      : truncatedDescription;
  return (
    <>
      <div className="container">
        <div className="item-detail">
          <h2 className="name">{name}</h2>
          <h3 className="item-price">
            ₹{(defaultPrice || item.item.price) / 100}
          </h3>
          <p className="item-description">{formattedDescription}</p>
        </div>
        <div className="image-container">
          <img src={ITEM_IMG_URL + imageId} className="image" alt="Item" />
          <button className="add-btn">ADD</button>
        </div>
      </div>
      <hr />
    </>
  );
};
export default MenuCard;
