import { BlurContainer } from '../../styles/Common.styled';
import { useEffect, useState, useCallback } from 'react';
import { debounce } from '../../utils/debounce';
import { ErrorText } from '../../styles/Fonts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { todayFormatted } from './defaultProducts';
import { addUserProduct, removeDictionaryProduct } from '../../store/AuthSlice';
import { deleteUserProductInFirebase } from '../../firebase/firebase';
import { ProductType } from '../../store/AuthSlice';
import { Flex, ContentContainer } from '../../styles/Common.styled';
import {
  SearchInput,
  TableHeader,
  HeaderItem,
  ProductRow,
  ProductColumn,
  ProductRowWrapper,
  ProductColumnUser,
  HeaderItemUser,
  CreatedImage,
} from './ProductsPage.styled';
import { AddBtn, BtnDelete, LinkBtn } from '../../styles/Buttons.styled';
import { searchFood } from '../../api/ApiTest';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { calculateNutrients } from '../../utils/calculateNutrients';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../components/Spinner/LoadingSpinner';

type ApiProductType = {
  serving_weight_grams?: number;
  food_name: string;
  nf_protein?: number;
  nf_total_fat?: number;
  nf_total_carbohydrate?: number;
  nf_calories?: number;
};

export default function ProductsPage() {
  const [query, setQuery] = useState('');
  const productsFromDictionary = useSelector(
    (state: RootState) => state.authSlice.dictionary
  );
  const [results, setResults] = useState<ProductType[]>(productsFromDictionary);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.authSlice);

  function normalizeProduct(apiProduct: ApiProductType): ProductType {
    const servingWeight = apiProduct.serving_weight_grams || 100;

    const formatToOneDecimal = (num: number) =>
      ((num / servingWeight) * 100).toFixed(1);

    return {
      id: uuidv4() + todayFormatted,
      food_name: apiProduct.food_name,
      nf_protein: parseFloat(formatToOneDecimal(apiProduct.nf_protein || 0)),
      nf_total_fat: parseFloat(
        formatToOneDecimal(apiProduct.nf_total_fat || 0)
      ),
      nf_total_carbohydrate: parseFloat(
        formatToOneDecimal(apiProduct.nf_total_carbohydrate || 0)
      ),
      nf_calories: parseFloat(formatToOneDecimal(apiProduct.nf_calories || 0)),
      isDefault: false,
    };
  }

  useEffect(() => {
    const sortedResult = [...productsFromDictionary].sort((a, b) =>
      a.food_name.toLowerCase().localeCompare(b.food_name.toLowerCase())
    );
    setResults(sortedResult);
  }, [productsFromDictionary]);

  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      setIsLoading(true);
      try {
        const localResults = productsFromDictionary.filter((product) =>
          product.food_name.toLowerCase().includes(query.toLowerCase())
        );
        let apiResults: ProductType[] = [];
        try {
          const data = await searchFood(query);
          if (data.foods && data.foods.length > 0) {
            apiResults = data.foods.map((p: ApiProductType) =>
              normalizeProduct(p)
            );
          }
        } catch (apiError) {
          console.error('Error API data:', apiError);
        }
        const combinedResults = [...localResults, ...apiResults];
        if (combinedResults.length === 0) {
          setError('this product does not exist');
          setResults([]);
        } else {
          setError(null);
          const sortedResults = combinedResults.sort((a, b) =>
            a.food_name.toLowerCase().localeCompare(b.food_name.toLowerCase())
          );
          setResults(sortedResults);
        }
      } catch (error) {
        console.error('General Error:', error);
        setError('There was an error loading data. Please try again later.');
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 1200),
    [productsFromDictionary]
  );

  useEffect(() => {
    if (query.trim() === '') {
      const sortedResult = [...productsFromDictionary].sort((a, b) =>
        a.food_name.toLowerCase().localeCompare(b.food_name.toLowerCase())
      );
      setResults(sortedResult);
      setError(null);
      return;
    }
    debouncedSearch(query);
  }, [query]);

  function handleSelectedProduct(product: ProductType) {
    if (selectedProduct && selectedProduct.id === product.id) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(product);
    }
  }

  return (
    <>
      <BlurContainer>
        <ContentContainer>
          <SearchInput
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search products...'
          />
          {error && <ErrorText>{error}</ErrorText>}
          {isLoading && <LoadingSpinner />}
          <Flex>
            <AddBtn
              onClick={async () => {
                if (!selectedProduct) {
                  toast.error('please select product');
                  return;
                } else {
                  const diaryProduct = {
                    ...selectedProduct,
                    id: uuidv4(),
                    diaryDate: new Date().toLocaleDateString(),
                  };

                  navigate(`/products/${diaryProduct.id}?mode=adding`, {
                    state: { product: diaryProduct, mode: 'adding' },
                  });
                  dispatch(addUserProduct(diaryProduct));
                }
              }}
            >
              add product to diary
            </AddBtn>

            <LinkBtn
              onClick={() => {
                navigate(`/products/creating`, {
                  state: { mode: 'creating' },
                });
              }}
            >
              create
            </LinkBtn>

            <LinkBtn
              disabled={!selectedProduct}
              onClick={() => {
                if (!selectedProduct) {
                  toast.error('Please select a product');
                  return;
                }
                navigate(`/products/${selectedProduct.id}?mode=view`, {
                  state: {
                    product: selectedProduct,
                    mode: 'view',
                    origin: 'products',
                  },
                });
              }}
            >
              view
            </LinkBtn>

            <LinkBtn
              disabled={!selectedProduct || !selectedProduct.isDefault}
              onClick={() => {
                if (selectedProduct) {
                  navigate(`/products/${selectedProduct.id}?mode=edit`, {
                    state: {
                      product: selectedProduct,
                      mode: 'edit',
                      origin: 'products',
                    },
                  });
                } else {
                  toast.error('Please select a product');
                  return;
                }
              }}
            >
              edit
            </LinkBtn>

            <BtnDelete
              disabled={!selectedProduct || !selectedProduct.isDefault}
              onClick={async () => {
                if (!selectedProduct) {
                  toast.error('Please select a product');
                  return;
                }
                if (currentUser.uid) {
                  try {
                    await deleteUserProductInFirebase(
                      currentUser.uid,
                      selectedProduct
                    );
                    dispatch(removeDictionaryProduct(selectedProduct.id));
                    toast.success('product deleted');
                  } catch (error) {
                    console.error('Error deleting product:', error);
                  }
                }
              }}
            >
              delete
            </BtnDelete>
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
            {results.map((product: ProductType) => (
              <ProductRow
                key={product.id}
                isSelected={
                  selectedProduct && selectedProduct.id === product.id
                }
                onClick={() => handleSelectedProduct(product)}
              >
                <ProductColumn>{product.food_name}</ProductColumn>
                <ProductColumnUser>
                  <CreatedImage
                    src={product.isDefault ? '/user.png' : '/api.png'}
                    alt='User Product'
                  />
                </ProductColumnUser>
                <ProductColumn>{product.nf_protein}g</ProductColumn>
                <ProductColumn>{product.nf_total_fat}g</ProductColumn>
                <ProductColumn>{product.nf_total_carbohydrate}g</ProductColumn>
                <ProductColumn>
                  {calculateNutrients(product).calories} kCal
                </ProductColumn>
              </ProductRow>
            ))}
          </ProductRowWrapper>
        </ContentContainer>
      </BlurContainer>
    </>
  );
}
