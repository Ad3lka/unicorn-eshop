
// Detailní stránka produktu pro e-shop s obuví
import React, { useState } from "react";

const ProductDetailPage = ({
  brand,
  name,
  color,
  imageUrl,
  originalPrice,
  discountedPrice,
  discount,
  sizes = []
}) => {
  const [selectedSize, setSelectedSize] = useState("");

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Prosím vyberte velikost.");
    } else {
      alert(`Produkt '${name}' ve velikosti ${selectedSize} byl přidán do košíku.`);
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 32, padding: 32 }}>
      <div style={{ flex: 1, minWidth: 300 }}>
        <img
          src={imageUrl}
          alt={name}
          style={{ width: "100%", borderRadius: 8 }}
        />
      </div>

      <div style={{ flex: 2, minWidth: 300 }}>
        <h2>{brand}</h2>
        <h1>{name}</h1>
        <p style={{ color: "gray" }}>{color}</p>

        <p style={{ fontSize: 18 }}>
          <span style={{ color: "red", fontWeight: "bold" }}>{discountedPrice} Kč</span>
          {discount && (
            <>
              {" "}
              <span
                style={{ textDecoration: "line-through", marginLeft: 8, color: "#888" }}
              >
                {originalPrice} Kč
              </span>
              <span style={{ marginLeft: 8, color: "#d00" }}>-{discount}%</span>
            </>
          )}
        </p>

        <label htmlFor="sizeSelect">Vyber velikost:</label>
        <select
          id="sizeSelect"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          style={{ display: "block", marginTop: 8, padding: 8 }}
        >
          <option value="">-- zvol velikost --</option>
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        <button
          onClick={handleAddToCart}
          style={{
            marginTop: 24,
            padding: "12px 24px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: 4,
            fontSize: 16,
            cursor: "pointer"
          }}
        >
          Přidat do košíku
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;

// Použití:
// <ProductDetailPage
//   brand="Under Armour"
//   name="U Infinite Pro Trail"
//   color="Black / Anthracite / Tetra Gray"
//   originalPrice={3799}
//   discountedPrice={3419}
//   discount={10}
//   imageUrl="/cesta/k/obrazku.png"
//   sizes={["EUR 40", "EUR 41", "EUR 42", "EUR 43"]}
// />
