import { BlurContainer } from "../../styles/Common.styled";
import { useEffect, useState, useCallback } from "react";
import { debounce } from "../../utils/debounce";
import { ErrorText } from "../../styles/Fonts.styled";
import { useDispatch, useSelector } from "react-redux";
import { addUserProduct } from "../../store/AuthSlice";
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
} from "./productsPage.styled"
import { AddBtn, BtnDelete, LinkBtn } from "../../styles/Buttons.styled";
import { searchFood } from "../../components/api/ApiTest";
import { appColors } from "../../styles/AppColors";
import { RootState } from "../../store/store";
import ModalBlock from "../../components/modals/ModalBlock";



const defaultProducts: ProductType[] = [
  {
    food_name: 'User Product 1',
    nf_protein: 5,
    nf_total_fat: 3,
    nf_total_carbohydrate: 20,
    nf_calories: 120,
  },
  {
    food_name: 'User Product 2',
    nf_protein: 8,
    nf_total_fat: 2,
    nf_total_carbohydrate: 15,
    nf_calories: 100,
  },
  {
    food_name: 'User Product 3',
    nf_protein: 10,
    nf_total_fat: 4,
    nf_total_carbohydrate: 30,
    nf_calories: 150,
  },
];

export default function ProductsPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ProductType[]>(defaultProducts);
	const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)
	const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.authSlice)
  const [isOpen, setIsOpen] = useState(false)


  function normalizeProduct(apiProduct: any): ProductType {
    return {
      food_name: apiProduct.food_name,
      nf_protein: apiProduct.full_nutrients?.find((n: any) => n.attr_id === 203)?.value || 0,
      nf_total_fat: apiProduct.full_nutrients?.find((n: any) => n.attr_id === 204)?.value || 0,
      nf_total_carbohydrate: apiProduct.full_nutrients?.find((n: any) => n.attr_id === 205)?.value || 0,
      nf_calories: apiProduct.full_nutrients?.find((n: any) => n.attr_id === 208)?.value || 0,
    };
  }

	const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      try {
        const data = await searchFood(query);
				if (!data.foods || data.foods.length === 0) {
					setError('this product does not exist');
          setResults([...defaultProducts, ...data.foods]);
				} else {
          const normalized = data.foods.map((p: any) => normalizeProduct(p));
					setResults(normalized);
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
      {selectedProduct ? (
              <LinkBtn to={`/products/${selectedProduct.food_name}`}>
                view
              </LinkBtn>
            ) : (
            <AddBtn onClick={() => alert('plese select product')}>view</AddBtn>)
}

      <AddBtn>edit</AddBtn>
      <BtnDelete>delete</BtnDelete>
      </Flex>

      <TableHeader>
        <HeaderItem>Products</HeaderItem>
        <HeaderItem>Proteins</HeaderItem>
        <HeaderItem>Fats</HeaderItem>
        <HeaderItem>Carbs</HeaderItem>
        <HeaderItem>kCal per 100g</HeaderItem>
      </TableHeader>


			<ProductRowWrapper>
          {results.map((product:ProductType) => (
            <ProductRow 
						key={product.food_name}
						onClick={() => handleSelectedProduct(product)}
						style={{
							backgroundColor: selectedProduct && selectedProduct.food_name === product.food_name ?
							 appColors.colors.OK_COLOR: appColors.colors.WHITE_COLOR,
							border: `2px solid ${appColors.colors.WHITE_COLOR}`,
							cursor: 'pointer'}}>
              <ProductColumn>{product.food_name}</ProductColumn>
              <ProductColumn>{product.nf_protein || 'N/A'}g</ProductColumn>
              <ProductColumn>{product.nf_total_fat || 'N/A'}g</ProductColumn>
              <ProductColumn>{product.nf_total_carbohydrate || 'N/A'}g</ProductColumn>
              <ProductColumn>{product.nf_calories || 'N/A'} kCal</ProductColumn>
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
