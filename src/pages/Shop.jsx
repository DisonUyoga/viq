import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
// import products from '../assets/data/products'
import ProductsList from "../components/UI/ProductsList";
import { useSelector, useDispatch } from "react-redux";
import { selectAll } from "../redux/slices/product";
import Spinner from "../components/Spinner";
import { useGetProductsQuery } from "../redux/slices/apiSlice";

const Shop = () => {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useGetProductsQuery();
  const [productsData, setProductsData] = useState(null);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) return <p>{JSON.stringify(error)}</p>;

  const handleFilter = (e) => {
    const { value } = e.target;
    if (value === "television") {
      const filteredProducts = products?.filter(
        (item) => item.category?.title.toLowerCase() === "television"
      );
      setProductsData(filteredProducts);
    } else if (value === "cooker") {
      const filteredProducts = products?.filter(
        (item) => item.category?.title.toLowerCase() === "cooker"
      );
      setProductsData(filteredProducts);
    } else if (value === "fridge") {
      const filteredProducts = products?.filter(
        (item) => item.category?.title.toLowerCase() === "fridge"
      );
      setProductsData(filteredProducts);
    } else if (value === "sound bar and audio") {
      const filteredProducts = products?.filter(
        (item) => item.category?.title.toLowerCase() === "sound bar and audio"
      );
      setProductsData(filteredProducts);
    } else if (value === "gaming") {
      const filteredProducts = products?.filter(
        (item) => item.category?.title.toLowerCase() === "gaming"
      );
      setProductsData(filteredProducts);
    } else if (value === "offer") {
      const filteredProducts = products?.filter(
        (item) => item.category?.title.toLowerCase() === "offer"
      );
      setProductsData(filteredProducts);
    } else if (value === "trending") {
      const filteredProducts = products?.filter(
        (item) => item.category?.title.toLowerCase() === "trending"
      );
      setProductsData(filteredProducts);
    } else {
      setProductsData(products);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    const searchedProducts = products?.filter((item) =>
      item.productName.toLowerCase().includes(value.toLowerCase())
    );
    setProductsData(searchedProducts);
  };
  return (
    <>
      <Helmet title="Shop">
        <CommonSection title={"Products"} />
        <section>
          <Container>
            <Row>
              <Col lg="3" md="6">
                <div className="filter__widget">
                  <select onChange={handleFilter}>
                    <option value="">Fileter By Category</option>
                    <option value="television">television</option>
                    <option value="fridge">fridge</option>
                    <option value="gaming">gaming</option>
                    <option value="sound bar and audio">
                      sound bar and audio
                    </option>
                    <option value="cooker">cooker</option>
                    <option value="trending">trending</option>
                    <option value="offer">offer</option>
                  </select>
                </div>
              </Col>
              <Col lg="3" md="6">
                <div className="filter__widget">
                  <select>
                    <option value="">Sort By</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
              </Col>
              <Col lg="6" md="12">
                <div className="search__box">
                  <input
                    type="text"
                    placeholder="search..."
                    onChange={handleSearch}
                  />
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="pt-0">
          <Container>
            <Row>{<ProductsList data={productsData ?? products} />}</Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Shop;
