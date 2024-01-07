import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Layout from "../layout";
import { numberFormat } from "../components/ArrivedItems";

export default function Cart({ cart, handleRemoveCartItem }) {
  return (
    <Layout mode={"dark"} cart={cart}>
      <Breadcrumb page={"cart"} />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <div
              className="w-full px-4 mb-4 md:w-8/12 md:mb-0"
              id="shopping-cart"
            >
              <div className="flex flex-start mb-4 mt-8 pb-3 border-b border-gray-200 md:border-b-0">
                <h3 className="text-2xl">Shopping Cart</h3>
              </div>

              <div className="border-b border-gray-200 mb-4 hidden md:block">
                <div className="flex flex-start items-center pb-2 -mx-4">
                  <div className="px-4 flex-none">
                    <div className="" style={{ width: "90px" }}>
                      <h6>Photo</h6>
                    </div>
                  </div>
                  <div className="px-4 w-5/12">
                    <div className="">
                      <h6>Product</h6>
                    </div>
                  </div>
                  <div className="px-4 w-5/12">
                    <div className="">
                      <h6>Price</h6>
                    </div>
                  </div>
                  <div className="px-4 w-2/12">
                    <div className="text-center">
                      <h6>Action</h6>
                    </div>
                  </div>
                </div>
              </div>

              {cart && cart.length === 0 && (
                <p id="cart-empty" className="text-center py-8">
                  Ooops... Cart is empty{" "}
                  <Link to="/" className="underline">
                    Shop Now
                  </Link>
                </p>
              )}
              {cart.length > 0 &&
                cart.map(({ id, item }, index) => (
                  <div
                    key={index}
                    className="flex flex-start flex-wrap items-center mb-4 -mx-4"
                    data-row="1"
                  >
                    <div className="px-4 flex-none">
                      <div
                        className=""
                        style={{ width: "90px", height: "90px" }}
                      >
                        <img
                          src={item.image1}
                          alt="chair-1"
                          className="object-cover rounded-xl w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="px-4 w-auto flex-1 md:w-5/12">
                      <div className="">
                        <h6 className="font-semibold text-lg md:text-xl leading-8">
                          {item.name}
                        </h6>
                        <span className="text-sm md:text-lg">Office Room</span>
                        <h6 className="font-semibold text-base md:text-lg block md:hidden">
                          {numberFormat(item.price)}
                        </h6>
                      </div>
                    </div>
                    <div className="px-4 w-auto flex-none md:flex-1 md:w-5/12 hidden md:block">
                      <div className="">
                        <h6 className="font-semibold text-lg">
                          {numberFormat(item.price)}
                        </h6>
                      </div>
                    </div>
                    <div className="px-4 w-2/12">
                      <div className="text-center">
                        <button
                          onClick={(e) => handleRemoveCartItem(e, id)}
                          data-delete-item="1"
                          className="text-red-600 border-none focus:outline-none px-3 py-1"
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="w-full md:px-4 md:w-4/12" id="shipping-detail">
              <div className="bg-gray-100 px-4 py-6 md:p-8 md:rounded-3xl">
                <form action="success.html">
                  <div className="flex flex-start mb-6">
                    <h3 className="text-2xl">Shipping Details</h3>
                  </div>

                  <div className="flex flex-col mb-4">
                    <label for="complete-name" className="text-sm mb-2">
                      Complete Name
                    </label>
                    <input
                      data-input
                      type="text"
                      id="complete-name"
                      className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                      placeholder="Input your name"
                    />
                  </div>

                  <div className="flex flex-col mb-4">
                    <label for="email" className="text-sm mb-2">
                      Email Address
                    </label>
                    <input
                      data-input
                      type="email"
                      id="email"
                      className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                      placeholder="Input your email address"
                    />
                  </div>

                  <div className="flex flex-col mb-4">
                    <label for="address" className="text-sm mb-2">
                      Address
                    </label>
                    <input
                      data-input
                      type="text"
                      id="address"
                      className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                      placeholder="Input your address"
                    />
                  </div>

                  <div className="flex flex-col mb-4">
                    <label for="phone-number" className="text-sm mb-2">
                      Phone Number
                    </label>
                    <input
                      data-input
                      type="tel"
                      id="phone-number"
                      className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                      placeholder="Input your phone number"
                    />
                  </div>

                  <div className="flex flex-col mb-4">
                    <label for="complete-name" className="text-sm mb-2">
                      Choose Courier
                    </label>
                    <div className="flex -mx-2 flex-wrap">
                      <div className="px-2 w-6/12 h-24 mb-4">
                        <button
                          type="button"
                          data-value="fedex"
                          data-name="courier"
                          className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                        >
                          <img
                            src="./images/content/logo-fedex.svg"
                            alt="Logo Fedex"
                            className="object-contain max-h-full"
                          />
                        </button>
                      </div>
                      <div className="px-2 w-6/12 h-24 mb-4">
                        <button
                          type="button"
                          data-value="dhl"
                          data-name="courier"
                          className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                        >
                          <img
                            src="./images/content/logo-dhl.svg"
                            alt="Logo dhl"
                            className="object-contain max-h-full"
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col mb-4">
                    <label for="complete-name" className="text-sm mb-2">
                      Choose Payment
                    </label>
                    <div className="flex -mx-2 flex-wrap">
                      <div className="px-2 w-6/12 h-24 mb-4">
                        <button
                          type="button"
                          data-value="midtrans"
                          data-name="payment"
                          className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                        >
                          <img
                            src="./images/content/logo-midtrans.png"
                            alt="Logo midtrans"
                            className="object-contain max-h-full"
                          />
                        </button>
                      </div>
                      <div className="px-2 w-6/12 h-24 mb-4">
                        <button
                          type="button"
                          data-value="mastercard"
                          data-name="payment"
                          className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                        >
                          <img
                            src="./images/content/logo-mastercard.svg"
                            alt="Logo mastercard"
                          />
                        </button>
                      </div>
                      <div className="px-2 w-6/12 h-24 mb-4">
                        <button
                          type="button"
                          data-value="bitcoin"
                          data-name="payment"
                          className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                        >
                          <img
                            src="./images/content/logo-bitcoin.svg"
                            alt="Logo bitcoin"
                            className="object-contain max-h-full"
                          />
                        </button>
                      </div>
                      <div className="px-2 w-6/12 h-24 mb-4">
                        <button
                          type="button"
                          data-value="american-express"
                          data-name="payment"
                          className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                        >
                          <img
                            src="./images/content/logo-american-express.svg"
                            alt="Logo american-logo-american-express"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled
                      className="bg-pink-400 text-black hover:bg-black hover:text-pink-400 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-6"
                    >
                      Checkout Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="border-b border-t border-gray-200 py-12 mt-16 px-4">
          <div className="flex justify-center mb-8">
            <img
              src="images/content/logo.png"
              alt="Luxspace | Fulfill your house with beautiful furniture"
            />
          </div>
          <aside className="container mx-auto">
            <div className="flex flex-wrap -mx-4 justify-center">
              <div className="px-4 w-full md:w-2/12 mb-4 md:mb-0 accordion">
                <h5 className="text-lg font-semibold mb-2 relative">
                  Overview
                </h5>
                <ul className="h-0 invisible md:h-auto md:visible overflow-hidden">
                  <li>
                    <Link to="/" className="hover:underline py-1 block">
                      Shipping
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:underline py-1 block">
                      Refund
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:underline py-1 block">
                      Promotion
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-4 w-full md:w-2/12 mb-4 md:mb-0 accordion">
                <h5 className="text-lg font-semibold mb-2 relative">Company</h5>
                <ul className="h-0 invisible md:h-auto md:visible overflow-hidden">
                  <li>
                    <Link to="/" className="hover:underline py-1 block">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:underline py-1 block">
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:underline py-1 block">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-4 w-full md:w-2/12 mb-4 md:mb-0 accordion">
                <h5 className="text-lg font-semibold mb-2 relative">Explore</h5>
                <ul className="h-0 invisible md:h-auto md:visible overflow-hidden">
                  <li>
                    <Link to="/" className="hover:underline py-1 block">
                      Terms & Conds
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:underline py-1 block">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:underline py-1 block">
                      For Developer
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-4 w-full md:w-3/12 mb-4 md:mb-0">
                <h5 className="text-lg font-semibold mb-2 relative">
                  Special Letter
                </h5>
                <form action="success.html">
                  <label className="relative w-full">
                    <input
                      data-input
                      type="text"
                      class="bg-gray-100 rounded-xl py-3 px-5 w-full focus:outline-none"
                      placeholder="Your email adress"
                    />
                    <button class="bg-pink-400 absolute rounded-xl right-0 p-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.6177 0.411971C23.6163 0.410624 23.6152 0.409187 23.6138 0.407839C23.6124 0.406492 23.6109 0.405414 23.6095 0.404157C23.236 0.049307 22.7002 -0.0573008 22.2098 0.126411L0.833871 8.13353C0.268743 8.34518 -0.0623361 8.87521 0.0098048 9.4523C0.0821332 10.0294 0.53462 10.4694 1.13589 10.547L11.5833 11.8968C11.6028 11.8994 11.6185 11.9143 11.6212 11.9332L13.0301 21.9417C13.1112 22.5177 13.5704 22.9512 14.1729 23.0204C14.2279 23.0268 14.2824 23.0298 14.3364 23.0298C14.8735 23.0298 15.3486 22.7229 15.5495 22.231L23.9077 1.75274C24.0994 1.28302 23.9882 0.76983 23.6177 0.411971ZM1.30534 9.34475C1.2819 9.34169 1.27136 9.34039 1.26728 9.30788C1.26325 9.27537 1.27319 9.27159 1.29508 9.26347L21.2946 1.77187L11.9404 10.7333C11.8794 10.7163 1.30534 9.34475 1.30534 9.34475ZM14.37 21.7892C14.3614 21.8102 14.358 21.8198 14.3236 21.8158C14.2897 21.8119 14.2883 21.8017 14.2852 21.7794C14.2852 21.7794 12.8535 11.6495 12.8358 11.5911L22.19 2.62972L14.37 21.7892Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </label>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
