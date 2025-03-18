import { BlurContainer } from "../../styles/Common.styled";
import { useEffect, useState, useCallback } from "react";
import { debounce } from "../../utils/debounce";
import { ErrorText } from "../../styles/Fonts.styled";
import { useDispatch, useSelector } from "react-redux";
import { addUserProduct, updateUserProduct } from "../../store/AuthSlice";
import { ProductType } from "../../store/AuthSlice";
import { addProductToUser } from "../../config/firebase";
import { Flex } from "../../styles/Common.styled";
import {
  ContentContainer,
  SearchInput,
  TableHeader,
  HeaderItem,
  ProductRow,
  ProductColumn,
	ProductRowWrapper,
  ProductColumnUser,
  HeaderItemUser,
} from "./productsPage.styled"
import { AddBtn, BtnDelete, LinkBtn } from "../../styles/Buttons.styled";
import { searchFood } from "../../components/api/ApiTest";
import { RootState } from "../../store/store";
import ModalBlock from "../../components/modals/ModalBlock";
import { useNavigate } from "react-router";
import { defaultProducts } from "../../config/defaultProducts";



export default function ProductsPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ProductType[]>(defaultProducts);
	const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)
	const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.authSlice)


  function normalizeProduct(apiProduct: any): ProductType {
    const servingWeight = apiProduct.serving_weight_grams || 100;
    return {
      food_name: apiProduct.food_name,
      nf_protein: Math.ceil((apiProduct.nf_protein || 0) / servingWeight * 100),
      nf_total_fat: Math.ceil((apiProduct.nf_total_fat || 0) / servingWeight * 100),
      nf_total_carbohydrate: Math.ceil((apiProduct.nf_total_carbohydrate || 0) / servingWeight * 100),
      nf_calories: Math.ceil((apiProduct.nf_calories || 0) / servingWeight * 100),
      isDefault: false,
    };
  }
  

	const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      try {
        const data = await searchFood(query);
				if (!data.foods || data.foods.length === 0) {
					setError('this product does not exist');
          setResults([...defaultProducts]);
				} else {
          const normalized = data.foods.map((p: any) => normalizeProduct(p));
					setResults([...normalized, ...defaultProducts]);
					setError(null);
				}
       
      } catch (error: any) {
        console.error('Error fetching data:', error);
        if (error.response && error.response.status === 404) {
          setError('this product does not exist');
        } else {
          setError('There was an error loading data. Please try again later.');
        }
        setResults([...defaultProducts])
      } 
    }, 1000),
    []
  );

	useEffect(() => {
		if(query.trim() === '') {
			setResults(defaultProducts);
      setError(null);
      return;
		}
    debouncedSearch(query)
	}, [query, debouncedSearch])

	function handleSelectedProduct(product: ProductType) {
    if (selectedProduct && selectedProduct.food_name === product.food_name) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(product);
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
		<>
		  <BlurContainer>
        <ContentContainer>
          <SearchInput type='text'
			    value={query}
			    onChange={(e) => setQuery(e.target.value)} placeholder="Search products..." />
  		    {error && <ErrorText>{error}</ErrorText>} 
        <Flex>
        <AddBtn onClick={async () => {
				if (!selectedProduct) {
					alert('plese select product')
					return;
				} else {
          dispatch(addUserProduct(selectedProduct))
          if (currentUser.uid) {
            try {
              await addProductToUser(currentUser.uid, selectedProduct)
              alert('Product added')
            } catch (error) {
              console.error('error adding product to DB', error)
            }
          }
        }
			}}>add product to diary</AddBtn>


      <AddBtn>create</AddBtn>


      <LinkBtn disabled={!selectedProduct}
      onClick={() => {
        if (!selectedProduct) {
          alert('Please select a product');
          return;
        }
        dispatch(addUserProduct(selectedProduct))
        navigate(`/products/${selectedProduct.food_name}`, { state: { mode: 'view' } });
      }}>
        view
        </LinkBtn>

        <LinkBtn disabled={!selectedProduct}
      onClick={() => {
        if (!selectedProduct) {
          alert('Please select a product');
          return;
        }
        dispatch(addUserProduct(selectedProduct))
        dispatch(updateUserProduct(selectedProduct))
        navigate(`/products/${selectedProduct.food_name}`, { state: { mode: 'edit' } });
      }}>
        edit
        </LinkBtn>
      <BtnDelete>delete</BtnDelete>
      </Flex>

      <TableHeader>
        <HeaderItem>Products</HeaderItem>
        <HeaderItemUser>Created</HeaderItemUser>
        <HeaderItem>Proteins</HeaderItem>
        <HeaderItem>Fats</HeaderItem>
        <HeaderItem>Carbs</HeaderItem>
        <HeaderItem>kCal per 100g</HeaderItem>
      </TableHeader>


			<ProductRowWrapper>
          {results.map((product:ProductType) => (
          <ProductRow
          key={product.food_name}
          isSelected={selectedProduct && selectedProduct.food_name === product.food_name}
          onClick={() => handleSelectedProduct(product)}
          >
            
            <ProductColumn>{product.food_name}</ProductColumn>
            <ProductColumnUser>
            <img
            src={product.isDefault ? '/user.png' : '/api.png'}
            alt="User Product"
            style={{ width: "16px", height: "16px", objectFit: "cover" }}
        />
            </ProductColumnUser>
            <ProductColumn>{product.nf_protein}g</ProductColumn>
            <ProductColumn>{product.nf_total_fat}g</ProductColumn>
            <ProductColumn>{product.nf_total_carbohydrate}g</ProductColumn>
            <ProductColumn>{product.nf_calories} kCal</ProductColumn>
          </ProductRow>
          ))}
        </ProductRowWrapper>

			</ContentContainer>
			</BlurContainer>
      <ModalBlock
          isOpen= {isOpen}
          onClose={closeModal}
          />
    </>
	)
}
