import { useEffect } from "react";
import { BlurContainer } from "../../styles/Common.styled"
import { InformationBlock, WhiteBlock, WrapperSections } from "./ProfilePage.styled"
import { MainTitle, MainSubTitle } from "../../styles/Fonts.styled"
import { getFirestore, addDoc, collection, getDocs, getDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import ProfileForm from "./ProfileForm";

async function getUsers() {
		const docsRef = await getDocs(collection(db, 'users'))
		console.log('doc written:', docsRef.docs.map(item => item.data()))

	return docsRef.docs.map(item => ({
		id: item.id,
		data: item.data(),
	}))
}

(async () => {
  try {
    const docs = await getUsers()
    console.log('#docs', docs);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})()


export default function ProfilePage() {

	useEffect(() => {
    getUsers();
  }, []);

    return <>
    	<BlurContainer>
				<MainTitle>
					my profile
				</MainTitle>
				<WrapperSections>
					<ProfileForm/>
{/* 
					<InformationBlock>
						<MainSubTitle> Weight </MainSubTitle>
					</InformationBlock>
					<InformationBlock>
					<MainSubTitle> 72 kg</MainSubTitle>
					</InformationBlock> */}

				</ WrapperSections>
			</BlurContainer>
			<InformationBlock>
				<WhiteBlock>
					2200 kCal
				</WhiteBlock>
			</InformationBlock>
    </>
}