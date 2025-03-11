import { BlurContainer } from "../../styles/Common.styled"
import { InformationBlock, WhiteBlock, WrapperSections } from "./ProfilePage.styled"
import { MainTitle, MainSubTitle } from "../../styles/Fonts.styled"

export default function ProfilePage() {
    return <>
    	<BlurContainer>
				<MainTitle>
					my profile
				</MainTitle>
				<WrapperSections>

					<InformationBlock>
						<MainSubTitle> Weight </MainSubTitle>
					</InformationBlock>
					<InformationBlock>
					<MainSubTitle> 72 kg</MainSubTitle>
					</InformationBlock>

				</ WrapperSections>
			</BlurContainer>
			<InformationBlock>
				<WhiteBlock>
					2200 kCal
				</WhiteBlock>
			</InformationBlock>
    </>
}