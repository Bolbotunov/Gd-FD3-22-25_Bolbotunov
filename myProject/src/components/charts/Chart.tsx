import { ChartsContainer, ChartsFilling } from "./Chart.styled";
import { ChartLineStyle } from "./Chart.styled";
import { ChartLineTitle } from "../../styles/Fonts.styled";
import { ChartLineBlock } from "./Chart.styled";

  type ChartPercentProps =  {
    proteinPercent: string;
    fatsPercent: string;
    carbsPercent: string;
    proteinColor: string;
    fatsColor: string;
    carbsColor: string;
  }

export default function Chart(props: ChartPercentProps) {

    return (
        <>
        <ChartsContainer>
          <ChartLineBlock>
            <ChartLineTitle>Proteins</ChartLineTitle>
          </ChartLineBlock>
          <ChartLineStyle>
            <ChartsFilling fillPercent = {props.proteinPercent} fillColor = {props.proteinColor}/>
          </ChartLineStyle>

          <ChartLineBlock>
            <ChartLineTitle>Fats</ChartLineTitle>
          </ChartLineBlock>
          <ChartLineStyle>
            <ChartsFilling fillPercent = {props.fatsPercent}  fillColor = {props.fatsColor}/>
          </ChartLineStyle>

          <ChartLineBlock>
            <ChartLineTitle>Proteins</ChartLineTitle>
          </ChartLineBlock>
          <ChartLineStyle>
            <ChartsFilling fillPercent = {props.carbsPercent}  fillColor = {props.carbsColor}/>
          </ChartLineStyle>


         </ChartsContainer>
        </>
      );
}