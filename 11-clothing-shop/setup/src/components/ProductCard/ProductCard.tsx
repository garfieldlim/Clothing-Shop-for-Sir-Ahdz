import {
  AddButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
} from './ProductCard.styled';
import { Product } from '../../models';
import storeContext from '../../context';
import useShop from '../../context';

export const ProductCard = ({ name, imageUrl, price }: Product) => {
  const { products, addToCart, removeFromCart } = useShop();
  const [isInCart, setIsInCart] = useState(false);
  
  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={false} onClick={() => {}}>
        <p>+</p>
      </AddButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
