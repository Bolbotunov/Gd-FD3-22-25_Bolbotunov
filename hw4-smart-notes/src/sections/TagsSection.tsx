import { CommonStylesText, NotesListStyles, CommonStylesTitles } from "../styles/CommonStyles.styled"
import { CommonBasicButtonStyles, CommonDeleteButtonStyles, CommonButtonGroup } from "../styles/MyButtonStyles.styled";
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote }  from "../slices/componentsSlice";
import NavigationSection from "./NavigationSection";
import MyModal from "../components/MyModal";
import { useState } from "react";

type TagType = {
    id: string;
    title: string;
    count: number;
  };
  
  type TagsSectionProps = {
    tags: TagType[];
  }

export default function TagsSection({ tags }: TagsSectionProps) {
    return (
        <div>
          {tags.map((tag: TagType) => (
            <div key={tag.id}>
              <h3>{tag.title}</h3>
              <p>Count: {tag.count}</p>
            </div>
          ))}
        </div>
      );
}