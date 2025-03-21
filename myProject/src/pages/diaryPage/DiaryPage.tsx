import {
  BlurContainer,
  Flex,
  ContentContainer,
} from "../../styles/Common.styled"
import Chart from "../../components/charts/Chart"
import DailyKCal from "../../components/DailyKCal/DailyKCal"
import { useDispatch, useSelector } from "react-redux";
import useCurrentDate from "../../hooks/useCurrentDate";
import { appColors } from "../../styles/AppColors";
import { CategoryTitleStyle } from "../../styles/Fonts.styled";
import { BtnDelete, LinkBtn } from "../../styles/Buttons.styled";
import { useNavigate } from "react-router";
import { RootState } from "../../store/store";
import { ProductType, setDailyProducts, removeDailyProduct } from "../../store/AuthSlice";
import { getDailyProducts,  deleteDailyProductInFirebase } from "../../config/firebase";
import { useState, useEffect } from "react";
import {
  TableHeader,
  HeaderItem,
  ProductRow,
  ProductColumn,
	ProductRowWrapper,
  ProductColumnUser,
  HeaderItemUser,
  CreatedImage,
} from "../productsPage/ProductsPage.styled"


export default function DiaryPage() {
	const dailyProducts = useSelector((state: RootState) => state.authSlice.products)
	const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)
	const currentUser = useSelector((state: RootState) => state.authSlice)
	const dispatch = useDispatch();
	const navigate = useNavigate()

	useEffect(() => {
		async function fetchDailyProducts() {
			if (currentUser.uid) {
				try {
					const dailyProductsFromFB = await getDailyProducts(currentUser.uid);
					dispatch(setDailyProducts(dailyProductsFromFB));
				} catch (error) {
					console.error("Error fetching user products:", error);
				}
			}
		}
		fetchDailyProducts();
	}, [currentUser.uid, dispatch]);


	const currentDate = useCurrentDate();
  const proteinPercent = '85%';
  const fatsPercent = '52%';
  const carbsPercent = '25%';

  const chartTitle = '50/100'

	function handleSelectedProduct(product: ProductType) {
    if (selectedProduct && selectedProduct.id === product.id) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(product);
    }
  }


  return <>
    <BlurContainer>
			<ContentContainer>
				<CategoryTitleStyle>
          Today: {currentDate}
        </CategoryTitleStyle>
				<Chart
					proteinPercent = {proteinPercent}
					fatsPercent= {fatsPercent}
					carbsPercent = {carbsPercent}
					proteinColor = {appColors.colors.PROTEIN_COLOR}
					fatsColor = {appColors.colors.FATS_COLOR}
					carbsColor = {appColors.colors.CARBS_COLOR}
					extraTitle={chartTitle}
					/>
				<DailyKCal/>
				<Flex>

				<LinkBtn
          onClick={() => {
          navigate(`/products`, {
            state: {  mode: "creating" },
          });
      		}}>
        add product
      </LinkBtn>


      <LinkBtn disabled={!selectedProduct}
      onClick={() => {
        if (!selectedProduct) {
          alert('Please select a product');
          return;
        }
        navigate(`/products/${selectedProduct.id}?mode=view`, {
          state: { product: selectedProduct, mode: "view", origin: 'diary' },
        });
      }}>
        view
        </LinkBtn>

        <LinkBtn disabled={!selectedProduct || !selectedProduct.isDefault}
      onClick={() => {
        if (selectedProduct) {
          navigate(`/diary/${selectedProduct.id}?mode=edit`, {
            state: { product: selectedProduct, mode: "edit" },
          });
        } else {
          alert('Please select a product');
          return;
        }
      }}>
        edit weight
        </LinkBtn>


        <BtnDelete
          disabled={!selectedProduct || !selectedProduct.isDefault}
          onClick={async () => {
            if (!selectedProduct ) {
              alert('Please select a product');
            return;
            }
            if (currentUser.uid) {
              try {
                await  deleteDailyProductInFirebase(currentUser.uid, selectedProduct);
                dispatch(removeDailyProduct(selectedProduct.id));
                alert("Product deleted");
              } catch (error) {
            console.error("Error deleting product:", error);
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
				<HeaderItem>Weight</HeaderItem>
      </TableHeader>

					<ProductRowWrapper>
          {dailyProducts.map((product:ProductType) => (
          <ProductRow
          key={product.id}
          isSelected={selectedProduct && selectedProduct.id === product.id}
          onClick={() => handleSelectedProduct(product)}
          >
            
            <ProductColumn>{product.food_name}</ProductColumn>
            <ProductColumnUser>
            <CreatedImage
            src={product.isDefault ? '/user.png' : '/api.png'}
            alt="User Product"
            />
            </ProductColumnUser>
            <ProductColumn>{product.nf_protein}g</ProductColumn>
            <ProductColumn>{product.nf_total_fat}g</ProductColumn>
            <ProductColumn>{product.nf_total_carbohydrate}g</ProductColumn>
            <ProductColumn>{product.nf_calories} kCal</ProductColumn>
						<ProductColumn>{product.weight || 0} g</ProductColumn>
          </ProductRow>
          ))}
        </ProductRowWrapper>
				</ContentContainer>
        </BlurContainer>
				
    </>
}