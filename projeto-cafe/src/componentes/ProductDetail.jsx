import { useState } from "react";

import {
  X,
  Plus,
  Minus,
  Heart,
} from "lucide-react";

import ProductIcon from "./ProductIcon";

import { money } from "../utils/format";

export default function ProductDetail({
  product,
  onClose,
  onAdd,
  isFavorite,
  onToggleFavorite,
}) {
  const [qty, setQty] = useState(1);

  if (!product) return null;

  return (
    <div
      className="overlay"
      onClick={onClose}
    >
      <div
        className="detail-panel"
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        {/* BOTÃO FECHAR */}

        <button
          type="button"
          className="overlay-close"
          onClick={onClose}
          aria-label="Fechar"
        >
          <X size={18} />
        </button>


        {/* IMAGEM DO PRODUTO */}

        <div className="detail-figure">
          <ProductIcon
            type={product.icon}
            className="detail-icon"
          />
        </div>


        {/* INFORMAÇÕES DO PRODUTO */}

        <div className="detail-body">

          <div className="detail-head-row">

            <p className="card-category">
              {product.category}
            </p>

          </div>


          <h2>
            {product.name}
          </h2>


          <p className="detail-note">
            {product.note}
          </p>


          <p className="detail-price">
            {money(product.price)}
          </p>


          {/* QUANTIDADE */}

          <div className="qty-row">

            <button
              type="button"
              className="qty-btn"
              onClick={() =>
                setQty((q) =>
                  Math.max(1, q - 1)
                )
              }
              aria-label="Diminuir quantidade"
            >
              <Minus size={14} />
            </button>


            <span className="qty-value">
              {qty}
            </span>


            <button
              type="button"
              className="qty-btn"
              onClick={() =>
                setQty((q) => q + 1)
              }
              aria-label="Aumentar quantidade"
            >
              <Plus size={14} />
            </button>

          </div>


          {/* FAVORITOS */}

          <button
            type="button"
            className={
              "favorite-detail-btn" +
              (isFavorite
                ? " active"
                : "")
            }
            onClick={() =>
              onToggleFavorite(
                product.id
              )
            }
            aria-label={
              isFavorite
                ? "Remover dos favoritos"
                : "Adicionar aos favoritos"
            }
          >

            <Heart
              size={16}
              strokeWidth={1.8}
              fill={
                isFavorite
                  ? "currentColor"
                  : "none"
              }
            />

            <span>
              {isFavorite
                ? "Remover dos favoritos"
                : "Adicionar aos favoritos"}
            </span>

          </button>


          {/* ADICIONAR À SACOLA */}

          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              onAdd(
                product,
                qty
              );

              onClose();
            }}
          >
            Adicionar à sacola
          </button>

        </div>

      </div>
    </div>
  );
}