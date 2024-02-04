import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import ProductsList from "../components/UI/ProductsList";
import Services from "../services/Services";
import "../styles/home.css";
import Spinner from "../components/Spinner";
import Trending from "../components/Trending";
import Cookers from "../components/UI/Cookers";
import Fridge from "../components/UI/Fridge";
import Gaming from "../components/UI/Gaming";
import LimitedOffers from "../components/UI/LimitedOffers";
import SoundBarAndAudio from "../components/UI/SoundBarAndAudio";
import Television from "../components/UI/Television";
import { useGetProductsQuery } from "../redux/slices/apiSlice";

const Home = () => {
  const {
    data: products = [],
    isLoading,
    isError,
    error: productsError,
  } = useGetProductsQuery();

  const year = new Date().getFullYear();

  if (isLoading) return <Spinner />;
  if (isError) return <p>{JSON.stringify(productsError)}</p>;

  const productOnOffer = products.filter(
    (item) => item?.category?.title.toLowerCase() === "offer"
  );
  const trendingProducts = products.filter(
    (item) => item?.category?.title.toLowerCase() === "trending"
  );
  const televisionProducts = products.filter(
    (item) => item?.category?.title.toLowerCase() === "sofa"
  );
  const cookerProducts = products.filter(
    (item) => item?.category?.title.toLowerCase() === "bed"
  );
  const soundProducts = products.filter(
    (item) => item?.category?.title.toLowerCase() === "wall unit"
  );
  const fridgeProducts = products.filter(
    (item) => item?.category?.title.toLowerCase() === "dining table"
  );
  const gamingProducts = products.filter(
    (item) => item?.category?.title.toLowerCase() === "coffee table"
  );
  return (
    <>
      {" "}
      {products.length > 0 ? (
        <Helmet title={"Home"}>
          <section className="hero__section">
            <Container>
              <Trending products={products} year={year} />
            </Container>
          </section>
          <Services />
          <section className="trending__products">
            <Container>
              <Row className="d-flex flex-sm-column align-items-center justify-content-between gap-5">
                <Col lg="12" className="text-center">
                  <h2 className="section__title">Trending Products</h2>
                </Col>
                <ProductsList data={trendingProducts} />
              </Row>
            </Container>
          </section>
          {televisionProducts.length > 0 && (
            <section className="best__sales">
              <Television television={televisionProducts} />
            </section>
          )}
          {productOnOffer && (
            <section className="timer__count">
              <LimitedOffers productOnOffer={productOnOffer} />
            </section>
          )}
          <section className="new__arrivals">
            <Container>
              <Row className="d-flex flex-sm-column flex-md-row align-items-center justify-content-between gap-5">
                {cookerProducts.length > 0 && (
                  <Cookers cooker={cookerProducts} />
                )}
                {soundProducts.length > 0 && (
                  <SoundBarAndAudio soundItem={soundProducts} />
                )}
              </Row>
            </Container>
          </section>
          {fridgeProducts.length > 0 && (
            <section className="popular__category">
              <Fridge fridgeProducts={fridgeProducts} />
            </section>
          )}
          {gamingProducts.length > 0 && (
            <section className="popular__category">
              <Gaming gamingProducts={gamingProducts} />
            </section>
          )}
        </Helmet>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Home;
