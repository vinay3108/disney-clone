import React,{useEffect} from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
// import NewDisney from './NewDisney';
import DisneyMovie from './DisneyMovie';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';
import { useDispatch,useSelector } from 'react-redux';
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import WatchList from './WatchList';
const Home = (props) => {
    const dispatch=useDispatch();
    const userName=useSelector(selectUserName);
    let recommends=[];
    let newDisney = [];
    let originals = [];
    let trending = [];
    let disneyMovie = [];
    let watchlist=[];
    useEffect(()=>{
        db.collection('movies').onSnapshot((snapshot)=>{
            snapshot.docs.map((doc)=>{
                switch(doc.data().type)
                {
                    case 'recommend':
                        recommends=[...recommends,{id:doc.id,...doc.data()}];
                        break;

                    case 'newDisney':
                        newDisney = [...newDisney, { id:doc.id,...doc.data() }];
                        break;
                

                    case 'original':
                        originals=[...originals,{id:doc.id,...doc.data()}];
                        break;

                    case 'trending':
                        trending=[...trending,{id:doc.id,...doc.data()}];
                        break;
                    case 'disneyMovie':
                        disneyMovie = [ ...disneyMovie, { id: doc.id, ...doc.data() } ];
                        break;
                    case 'watchlist':
                        watchlist=[...watchlist,{id:doc.id,...doc.data()}];
                        break;

                    default:
                        {
                            break;
                        }
                }
            });

            
            dispatch(
                setMovies({
                    watchlist:watchlist,
                    recommend:recommends,
                    NewDisney:newDisney,
                    original:originals,
                    trending: trending,
                    disneyMovie:disneyMovie,
                })
            );
        });
    },[userName]);

    return (
        <Container>
            <ImgSlider/>
            <Viewers />
           
            <WatchList/>
           
            <DisneyMovie/>
            <Recommends/>
            {/* <NewDisney/> */}
            <Originals/>
            <Trending />
        </Container>
    );
};



export default Home

const Container=styled.main`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top:72px;
padding: 0 calc(3.5vw + 5px);

    &:after{
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
        content:"";
        position: absolute;
        inset:0px;
        opacity: 1;
        z-index:-1;
    }
    `
