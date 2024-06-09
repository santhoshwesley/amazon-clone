import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import styles from "./App.module.css";
import ProductSlider from "./components/Product/ProductSlider";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import { AuthProvider } from "./context/AuthContext";

const images = [
  "/assets/header2.jpg",
  "./assets/header3.jpg",
  "./assets/header4.jpg",
  "./assets/header5.jpg",
  "./assets/header6.jpg",
];

const cardData1 = {
  title: "Featured Products",
  items: [
    {
      title: "Free international returns",
      imgSrc: "./assets/box1-1.jpg",
      link: "/",
    },
    { title: "Lunar New Year", imgSrc: "./assets/box1-2.jpg", link: "/" },
    { title: "Toy under $25", imgSrc: "./assets/box1-3.jpg", link: "/" },
    { title: "Deals in PCs", imgSrc: "./assets/box1-4.jpg", link: "/" },
  ],
};

const cardData2 = {
  title: "Special Offers",
  items: [
    { title: "Grooming Products", imgSrc: "./assets/box2-1.jpg", link: "/" },
    { title: "Latest Devices", imgSrc: "./assets/box2-2.jpg", link: "/" },
    { title: "Pets Food", imgSrc: "./assets/box2-3.jpg", link: "/" },
    { title: "Fashion Mart", imgSrc: "./assets/box2-4.jpg", link: "/" },
  ],
};

const cardData3 = {
  title: "Featured Products",
  items: [
    { title: "Stationary", imgSrc: "./assets/box3-1.jpg", link: "/" },
    { title: "Laptops for study", imgSrc: "./assets/box3-2.jpg", link: "/" },
    { title: "Office Chairs", imgSrc: "./assets/box3-3.jpg", link: "/" },
    { title: "Gaming Monitors", imgSrc: "./assets/box3-4.jpg", link: "/" },
  ],
};

const productData1 = [
  "./assets/product1-1.jpg",
  "./assets/product1-2.jpg",
  "./assets/product1-3.jpg",
  "./assets/product1-4.jpg",
  "./assets/product1-5.jpg",
  "./assets/product1-6.jpg",
  "./assets/product1-7.jpg",
  "./assets/product1-8.jpg",
  "./assets/product1-9.jpg",
  "./assets/product1-10.jpg",
];

const productData2 = {
  title: "Deal under $25",
  items: [
    {
      imgSrc: "./assets/product2-1.jpg",
      offer: "27% off",
      offerType: "Deal",
      price: "14.49",
      listPrice: "19.95",
      description: "This product is the best for you",
    },
    {
      imgSrc: "./assets/product2-2.jpg",
      offer: "27% off",
      offerType: "Deal",
      price: "14.49",
      listPrice: "19.95",
      description: "This product is the best for you",
    },
    {
      imgSrc: "./assets/product2-3.jpg",
      offer: "27% off",
      offerType: "Deal",
      price: "14.49",
      listPrice: "19.95",
      description: "This product is the best for you",
    },
    {
      imgSrc: "./assets/product2-4.jpg",
      offer: "27% off",
      offerType: "Deal",
      price: "14.49",
      listPrice: "19.95",
      description: "This product is the best for you",
    },
    {
      imgSrc: "./assets/product2-5.jpg",
      offer: "27% off",
      offerType: "Deal",
      price: "14.49",
      listPrice: "19.95",
      description: "This product is the best for you",
    },
    {
      imgSrc: "./assets/product2-6.jpg",
      offer: "27% off",
      offerType: "Deal",
      price: "14.49",
      listPrice: "19.95",
      description: "This product is the best for you",
    },
    {
      imgSrc: "./assets/product2-7.jpg",
      offer: "27% off",
      offerType: "Deal",
      price: "14.49",
      listPrice: "19.95",
      description: "This product is the best for you",
    },
    {
      imgSrc: "./assets/product2-8.jpg",
      offer: "27% off",
      offerType: "Deal",
      price: "14.49",
      listPrice: "19.95",
      description: "This product is the best for you",
    },
    {
      imgSrc: "./assets/product2-9.jpg",
      offer: "27% off",
      offerType: "Deal",
      price: "14.49",
      listPrice: "19.95",
      description: "This product is the best for you",
    },
    {
      imgSrc: "./assets/product2-10.jpg",
      offer: "27% off",
      offerType: "Deal",
      price: "14.49",
      listPrice: "19.95",
      description: "This product is the best for you",
    },
    {
      imgSrc: "./assets/product2-11.jpg",
      offer: "27% off",
      offerType: "Deal",
      price: "14.49",
      listPrice: "19.95",
      description: "This product is the best for you",
    },
  ],
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <div className="content">
            <Header />
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

function Home() {
  return (
    <>
      <Hero images={images} />
      <Card items={cardData1.items} className={styles.featuredCard} />
      <Card
        title={cardData2.title}
        items={cardData2.items}
        className={styles.specialOffersCard}
      />
      <ProductSlider
        products={productData1.map((product) => ({
          imgSrc: product,
          title: "",
        }))}
        title="Best Seller in Sports & Outdoors"
      />
      <Card
        title={cardData3.title}
        items={cardData3.items}
        className={styles.specialOffersCard}
      />
      <ProductSlider products={productData2.items} title="Deal under $25" />
      <ProductSlider
        products={productData1.map((product) => ({
          imgSrc: product,
          title: "",
        }))}
        title="Best Seller in Sports & Outdoors"
      />
      <Card
        title={cardData2.title}
        items={cardData2.items}
        className={styles.specialOffersCard}
      />
    </>
  );
}

export default App;
