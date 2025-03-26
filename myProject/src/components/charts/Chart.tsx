import { ChartsContainer, ChartsFilling } from "./Chart.styled";
import { ChartLineStyle, ExtraBlock } from "./Chart.styled";
import { ChartLineTitle} from "../../styles/Fonts.styled";
import { ChartLineBlock } from "./Chart.styled";
import { Flex } from "../../styles/Common.styled";

type ExtraTitles = {
  protein: string;
  fats: string;
  carbs: string;
};

type ChartPercentProps = {
  proteinPercent: string;
  fatsPercent: string;
  carbsPercent: string;
  proteinColor: string;
  fatsColor: string;
  carbsColor: string;
  extraTitles: ExtraTitles;
};


export default function Chart(props: ChartPercentProps) {

    return (
        <>
        <ChartsContainer>
          <ChartLineBlock>
            <ChartLineTitle>Proteins</ChartLineTitle>
          </ChartLineBlock>
          <Flex>
            <ChartLineStyle>
              <ChartsFilling fillpercent = {`${props.proteinPercent}%`} fillcolor = {props.proteinColor}/>
            </ChartLineStyle>
            <ExtraBlock>{props.extraTitles.protein}</ExtraBlock>
          </Flex>

          <ChartLineBlock>
            <ChartLineTitle>Fats</ChartLineTitle>
          </ChartLineBlock>
          <Flex>
            <ChartLineStyle>
              <ChartsFilling fillpercent = {`${props.fatsPercent}%`}  fillcolor = {props.fatsColor}/>
            </ChartLineStyle>
            <ExtraBlock>{props.extraTitles.fats}</ExtraBlock>
          </Flex>

          <ChartLineBlock>
            <ChartLineTitle>Carbs</ChartLineTitle>
          </ChartLineBlock>
          <Flex>
            <ChartLineStyle>
              <ChartsFilling fillpercent = {`${props.carbsPercent}%`}  fillcolor = {props.carbsColor}/>
            </ChartLineStyle>
            <ExtraBlock>{props.extraTitles.carbs}</ExtraBlock>
          </Flex>
         </ChartsContainer>
        </>
      );
}