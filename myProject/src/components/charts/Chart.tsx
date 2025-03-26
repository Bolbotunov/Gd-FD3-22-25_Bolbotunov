import { ChartsContainer, ChartsFilling } from './Chart.styled';
import { ChartLineStyle, ExtraBlock } from './Chart.styled';
import { ChartLineTitle } from '../../styles/Fonts.styled';
import { ChartLineBlock } from './Chart.styled';
import { Flex } from '../../styles/Common.styled';

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
            <ExtraBlock>{props.extraTitles.protein}</ExtraBlock>
            <ChartsFilling
              fillpercent={`${props.proteinPercent}%`}
              fillcolor={props.proteinColor}
            />
          </ChartLineStyle>
        </Flex>

        <ChartLineBlock>
          <ChartLineTitle>Fats</ChartLineTitle>
        </ChartLineBlock>
        <Flex>
          <ChartLineStyle>
            <ExtraBlock>{props.extraTitles.fats}</ExtraBlock>
            <ChartsFilling
              fillpercent={`${props.fatsPercent}%`}
              fillcolor={props.fatsColor}
            />
          </ChartLineStyle>
        </Flex>

        <ChartLineBlock>
          <ChartLineTitle>Carbs</ChartLineTitle>
        </ChartLineBlock>
        <Flex>
          <ChartLineStyle>
            <ExtraBlock>{props.extraTitles.carbs}</ExtraBlock>
            <ChartsFilling
              fillpercent={`${props.carbsPercent}%`}
              fillcolor={props.carbsColor}
            />
          </ChartLineStyle>
        </Flex>
      </ChartsContainer>
    </>
  );
}
