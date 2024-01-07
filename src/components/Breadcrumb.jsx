import { Link } from "react-router-dom";

export default function Breadcrumb({ page }) {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          {page === "cart" ? (
            <li>
              <Link ariaLabel="current-page">Shopping Cart</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/">Office Room</Link>
              </li>
              <li>
                <Link to="/" ariaLabel="current-page">
                  Details
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </section>
  );
}
