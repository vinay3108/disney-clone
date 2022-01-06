import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectDisneyMovie } from '../features/movie/movieSlice'
const Originals = () => {
    const movies=useSelector(selectDisneyMovie);
    return (
        <Container>
        <h4>Disney Movie</h4>
        <Content>
          {movies &&movies.map((movie,key)=>(
              <Wrap key={key}>
                 
                  <Link to={"/detail/"+ movie.id}>
                    <WrapDesc>
                      <p>{movie.title}</p>
                      <p>{movie.subTitle}</p>
                    </WrapDesc>
                     <img src={movie.cardImg} alt="" />
                  </Link>
              </Wrap>
          ))}
        </Content>
    </Container>
    )
}

export default Originals
const Container = styled.div``;

const Content = styled.div`
  padding: 0 0 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  position: relative;

  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgba(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    border-color: rgba(249, 249, 249, 0.8);
    transform: scale(1.2);
    box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px,
      rgba(0 0 0 / 72%) 0px 30px 22px -10px;
      
  }


`;

const WrapDesc=styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background:rgba(0,0,0,0.5);
  top:0;
  left: 0;
  opacity: 0;
  margin:0;
  &:hover{
    opacity: 1;
  }
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  p{
    font-size: 0.75rem;
    font-weight: 600;
    margin:2px 4px;
    padding: 0;
  }
`;