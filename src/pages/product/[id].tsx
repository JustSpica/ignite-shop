import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product';

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusantium sed laudantium ex impedit cupiditate maiores inventore illo aspernatur dolorem tempore, rem quam eum eligendi quo ab, architecto vel molestias.</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}