import React from 'react';
import './YoutubeCard.css';
import { Button, Typography } from '@mui/material';
import { FaTrash } from 'react-icons/fa';
import { deleteYoutube, getUser } from '../../action/user';
import { useDispatch } from 'react-redux';

const YoutubeCard = ({
  url = 'https://youtube.com',
  title = 'Title here',
  id,
  image,
  isAdmin = 'false',
}) => {

  const dispatch = useDispatch()

  const deleteHandler = async (id)=>{
    await dispatch(deleteYoutube(id))
    dispatch(getUser())
 }
  return (
    <div className="youtubeCard">
      <a
        href={url}
        target="blank">
        <img
          src={image}
          alt="video"
        />
        <Typography>{title}</Typography>
      </a>
      {isAdmin && (
        <Button
          style={{ margin: 'auto', display: 'block', color: 'rgba(40,40,40,0.7)' }}
          onClick={() => deleteHandler(id)}>
          <FaTrash />
        </Button>
      )}
    </div>
  );
};

export default YoutubeCard;
