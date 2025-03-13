import { ProductsBlock } from "./productsPage.styled"
import { useEffect, useState } from "react";
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

export default function ProductsPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

	const handleSearch = async () => {
    try {
			console.log('query', query)
      const data = await searchFood(query);
      setResults(data.foods);
			console.log('results', data.foods)
    } catch (error) {
      console.error('Error:', error);
    }
  };


	useEffect(() => {
		if(query) {
			handleSearch()
		}
	}, [query])

	// const products = [
  //   {
  //     id: 1,
  //     name: 'Banana',
  //     proteins: 1.2,
  //     fats: 0.3,
  //     carbs: 27,
  //     calories: 89,
  //   },
  //   {
  //     id: 2,
  //     name: 'Apple',
  //     proteins: 0.3,
  //     fats: 0.2,
  //     carbs: 14,
  //     calories: 52,
  //   },
  // ];
			

  return (
		<>
		<ProductsBlock>
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
            <ProductRow key={product.food_name}>
              <ProductColumn>{product.food_name}</ProductColumn>
              <ProductColumn>{product.nf_protein || 'N/A'}g</ProductColumn>
              <ProductColumn>{product.nf_total_fat || 'N/A'}g</ProductColumn>
              <ProductColumn>{product.nf_total_carbohydrate || 'N/A'}g</ProductColumn>
              <ProductColumn>{product.nf_calories || 'N/A'} kCal</ProductColumn>
            </ProductRow>
          ))}
        </ProductRowWrapper>

      <AddBtn>Add Product</AddBtn>
			</ContentContainer>
			</ProductsBlock>
   
    </>
	)
}
