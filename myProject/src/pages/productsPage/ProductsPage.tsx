import { BlurContainer } from "../../styles/Common.styled";
import { useEffect, useState, useCallback } from "react";
import { debounce } from "../../utils/debounce";
import {
  ContentContainer,
  SearchInput,
  TableHeader,
  HeaderItem,
  ProductRow,
  ProductColumn,
	AddBtn,
	ProductRowWrapper,
} from "./productsPage.styled"
import { searchFood } from "../../components/api/ApiTest";



type ProductType = {
  food_name: string;
  nf_protein: number;
  nf_total_fat: number;
  nf_total_carbohydrate: number;
  nf_calories: number;
};


export default function ProductsPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ProductType[]>([]);
	const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)
	
  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      try {
        const data = await searchFood(query);
        setResults(data.foods);
      } catch (error) {
        console.error('Error:', error);
      }
    }, 1000),
    []
  );

	useEffect(() => {
		if(query) {
			debouncedSearch(query)
		}
	}, [query, debouncedSearch])

function handleSelectedProduct(product: ProductType) {
	setSelectedProduct(product)
}


  return (
		<>
		 <BlurContainer>
    <ContentContainer>
      <SearchInput type='text'
			value={query}
			onChange={(e) => setQuery(e.target.value)} placeholder="Search products..." />

      <TableHeader>
        <HeaderItem>Products</HeaderItem>
        <HeaderItem>Proteins</HeaderItem>
        <HeaderItem>Fats</HeaderItem>
        <HeaderItem>Carbs</HeaderItem>
        <HeaderItem>kCal per 100g</HeaderItem>
      </TableHeader>


			<ProductRowWrapper>
          {results.map((product: any) => (
            <ProductRow 
						key={product.food_name}
						onClick={() => handleSelectedProduct(product)}
						style={{
							backgroundColor: selectedProduct && selectedProduct.food_name === product.food_name ? '#955120' : 'white',
							cursor: 'pointer'}}>
              <ProductColumn>{product.food_name}</ProductColumn>
              <ProductColumn>{product.nf_protein || 'N/A'}g</ProductColumn>
              <ProductColumn>{product.nf_total_fat || 'N/A'}g</ProductColumn>
              <ProductColumn>{product.nf_total_carbohydrate || 'N/A'}g</ProductColumn>
              <ProductColumn>{product.nf_calories || 'N/A'} kCal</ProductColumn>
            </ProductRow>
          ))}
        </ProductRowWrapper>

      <AddBtn>Add Product to diary</AddBtn>
			</ContentContainer>
			</BlurContainer>
   
    </>
	)
}
