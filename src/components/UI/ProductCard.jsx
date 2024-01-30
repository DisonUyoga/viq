import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Col } from "reactstrap";
import { addItem } from "../../redux/slices/cartSlice";
import { getAunthentication } from "../../redux/slices/loginSlice";
// import "../../styles/item-card.css";
import PriceFormat from "../Format";
import "./image-style.css";
import { useGetProductQuery } from "../../redux/slices/apiSlice";

const ProductCard = ({ item, checkAuth }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getAunthentication);
  const navigate = useNavigate();

  const addToCart = () => {
    dispatch(
      addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success("product added");
  };

  return (
    <Col lg="3" md="4" sm="12" className="text-center border-0">
      <div className="card border-0">
        <img
          src={item?.imgUrl}
          className="card-img-top img-fluid"
          alt={item?.productName}
        />
        <div className="card-body">
          <h5 className="card-title">{item?.name}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <motion.span whileTap={{ scale: 1.2 }}>
              <i className="ri-add-line" onClick={addToCart}></i>
            </motion.span>

            <PriceFormat price={item?.price} />
          </div>

          <div className="d-flex align-items-center justify-content-center mt-4">
            <Link
              to={`/shop/${item.id}`}
              whileTap={{ scale: 1.1 }}
              className="btn btn-sm rounded-pill btn-primary"
            >
              view
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
