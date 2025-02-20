import { CommonStylesText, NotesListStyles, CommonStylesTitles } from "../styles/CommonStyles.styled"
import { CommonBasicButtonStyles, CommonDeleteButtonStyles, CommonButtonGroup } from "../styles/MyButtonStyles.styled";
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote }  from "../slices/componentsSlice";
import { useState } from "react";
import { TagsStyles, TagsContainerStyles, TagsButtonStyles } from "../styles/MyTagsStyles.styled";
import MyTagModal from "../components/MyTagModal";


type TagType = {
    id: string;
    title: string;
    count: number;
    toEdit: boolean;
  };
  
  type TagsSectionProps = {
    tags: TagType[];
  }


export default function TagsSection({ tags }: TagsSectionProps) {

  const [tagId, setTagId] = useState(false);
  const [isOpenTagModal, setIsOpenTagModal] = useState(false)
  const [tagToEdit, setTagToEdit] = useState<TagType | null>(null);
  const dispatch = useDispatch()


  function openTagModal(tag: TagType) {
    setTagToEdit(tag);
    setIsOpenTagModal(true);
  }

  function closeTagModal() {
    setIsOpenTagModal(false);
    setTagToEdit(null);
  }

    return (
      <>
        <TagsContainerStyles>
          {tags.map((tag: TagType) => (
            <TagsStyles key={tag.id}>
              <h3 style={{margin:'5px'}}>{tag.title}</h3>
              <p style={{margin:'5px', fontSize:'12px'}}>( {tag.count} )</p>
              <TagsButtonStyles onClick={() => openTagModal(tag)}>E</TagsButtonStyles>
            </TagsStyles>
          ))}
        </TagsContainerStyles>

        {isOpenTagModal && (
        <MyTagModal
          isOpen={isOpenTagModal}
          onClose={closeTagModal}
          tagToEdit={tagToEdit}
        />
      )}
    </>
  );
}