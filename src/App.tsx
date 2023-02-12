import { useMemo } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useParams,
  Outlet,
  Link,
} from "react-router-dom";
import { businesses } from "./data/data";
import type { Buisness } from "./data/data";
import solana from "./assets/solana.svg";
import { useShoppingCartContext } from "./context/ShoppingCartContext";
import { sendTransaction } from "./utils";

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/buisness/:id" element={<Buisness />} />
          </Route>
          {/* catch */}
          <Route
            path="*"
            element={
              <div className="flex h-screen flex-col items-center justify-center">
                <h1 className="text-6xl font-bold">404</h1>
                <br />
                <p className="max-w-sm text-center">
                  The page you are looking for does not exist. Please check the
                  URL. Go back to{" "}
                  <Link to="/" className="text-blue-500">
                    Home
                  </Link>
                </p>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function Navbar({}) {
  const { totalItemsCount, total, read } = useShoppingCartContext();

  return (
    <div className="navbar fixed top-0 z-10 border-b bg-base-100">
      <div className="flex-1">
        <Link
          to={"/"}
          className="btn-ghost btn font-header text-xl normal-case"
        >
          Solasis
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle btn">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {totalItemsCount()}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="card-compact card dropdown-content mt-3 w-64 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">
                {totalItemsCount()} Items
              </span>

              <div>
                {read().map((item, i) => (
                  <div key={i} className="flex justify-between gap-2">
                    <span className="text-base">
                      {item.name} * {item.qty}
                    </span>
                    <span className="text-base">
                      <Price amt={item.total} />
                    </span>
                  </div>
                ))}
              </div>

              <span className="text-info">
                Subtotal: <Price amt={total().toFixed(2)} />
              </span>
              <div className="card-actions">
                <button
                  className="btn-primary btn-block btn "
                  onClick={() =>
                    sendTransaction(
                      "28tNi72TQeprQ5A6812C91kSKKhEwbfcoY2nnNyDtuCJ",
                      total()
                    )
                  }
                >
                  Pay with &nbsp;
                  <img
                    src="https://lh3.googleusercontent.com/VhRtNjTWTFzfEEcVzy8EUrWahuLI4vAJFqURDLynZq2Xm-b6n9wr2k-LMRtWhIwqTNJLfORSWwqkYwMBdXRQ4MKA0w=w128-h128-e365-rj-sc0x00ffffff"
                    alt=""
                    className="h-6 w-6 rounded-full"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
}

function Buisness() {
  const { addItem, removeItem, count } = useShoppingCartContext();

  const buisnessID = useParams().id as string;
  const buisness = useMemo(() => {
    return businesses.find((buisness) => buisness.id === buisnessID);
  }, [buisnessID]);

  return (
    <main className="pt-16">
      <div className="hero py-16 shadow-lg">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <img
            src={
              buisness?.img ||
              "https://plus.unsplash.com/premium_photo-1670895801135-858a7d167ea4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            className="max-w-xs rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{buisness?.name}</h1>
            <p className="py-6">{buisness?.longDescription}</p>
            <a href="#products" className="btn-primary btn">
              Browse Products
            </a>
          </div>
        </div>
      </div>

      <section id="products" className="container mx-auto px-6 py-8">
        <h2 className="mb-8 text-center text-4xl font-bold">
          <span className="text-primary">Featured &nbsp;</span>
          Products
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {buisness?.products.map((product) => (
            <div
              key={product.id}
              className="card-compact min-w-80 card max-w-sm bg-base-100 shadow-xl"
            >
              <figure className={`object-cover `}>
                <img
                  src={product.img}
                  alt="Shoes"
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-neutral">{product.name}</h2>
                <div className="grid grid-cols-2 place-items-center pb-4">
                  <p className="text-xl font-bold">Price</p>
                  <Price amt={product.price} />
                </div>
                <div className="card-actions justify-center">
                  {count(product.id) > 0 ? (
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => removeItem(product)}
                        className=" flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xl font-bold text-white "
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                        </svg>
                      </button>

                      <p className="text-xl">{count(product.id)}</p>

                      <button
                        onClick={() => addItem(product)}
                        className=" flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xl font-bold text-white "
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          // t="1551322312294"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs></defs>
                          <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                          <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <button
                      className="btn-primary btn"
                      onClick={() => addItem(product)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer items-center bg-neutral p-4 text-neutral-content">
      <div className="grid-flow-col items-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
    </footer>
  );
}

function Hero() {
  return (
    <div
      className="hero min-h-screen shadow-md"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1621973856220-29115d9b5d29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 font-header text-5xl font-bold">
            Women Solana Ohana
          </h1>
          {/* <img src="https://i.imgur.com/kdfzrf0.png" alt="" /> */}
          <p className="mb-5 text-xl">
            Decentralized Marketplace for women owned businesses
          </p>
          <button className="btn-primary btn">Get Started</button>
        </div>
      </div>
    </div>
  );
}

function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-4">
      <h2 className="mb-2 text-4xl font-bold">
        <span className="text-primary">Featured &nbsp;</span>
        Buisnesses
      </h2>
      <p className="mb-4 text-lg">View all women buisnesses here...</p>

      {/* all cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {businesses.map((business) => {
          return <Card key={business.id} business={business} />;
        })}
      </div>
    </section>
  );
}

function Card({ business }: { business: Buisness }) {
  return (
    <div className="min-w-80 card-compact card max-w-sm bg-base-100 shadow-xl">
      <figure>
        <img src={business.img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{business.name}</h2>
        <p>{business.shortDescription}</p>
        <div className="card-actions justify-end">
          <Link to={`/buisness/${business.id}`} className="btn-primary btn">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}

function Price({ amt }: { amt: number | string }) {
  return (
    <p className="flex items-center gap-2 text-lg">
      {amt} <img src={solana} alt="solana" className="w-5 " />
    </p>
  );
}
