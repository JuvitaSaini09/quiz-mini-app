import {gk,culture,dharmic,geographic,history,movies,science,sports} from "../images/allImages"
import uuid from 'react-uuid';

export const quizCategories = [
    {
      id: uuid(),
      name: "General Knowledge",
      img:
        gk
    },
    {
      id: uuid(),
      name: "Culture",
      img: culture
    },
    {
      id: uuid(),
      name: "Movies",
      img:
        movies
    },
    {
      id: uuid(),
      name: "History",
      img:
        history
    },
    {
      id: uuid(),
      name: "Dharmic",
      img:
        dharmic
    },
  
    {
      id: uuid(),
      name: "Science",
      img:
        science
    },
    {
      id: uuid(),
      name: "Sports",
      img:
        sports
    },
    {
      id: uuid(),
      name: "Geographic",
      img:
        geographic
    }
  ];
  