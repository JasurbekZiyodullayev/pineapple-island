import styled from '@emotion/styled'
import ImgHeaderBack from '../../images/header-img.png'
import ImgHeaderRes1 from '../../images/responsev-img/header-leaut.png'
import ImgHeaderRes2 from '../../images/responsev-img/header-respons.png'


export const Container = styled.div`

    background: url(${ImgHeaderBack});
    width: 100%;
    height: 35vw;
    background-repeat: no-repeat;
    background-size: 75% 100%;
    background-position: top right;
    @media (max-width: 376px){
        height: 173.7vw;
        background-size: 90%;
        background-position: center;
        background-image: url(${ImgHeaderRes1}), url(${ImgHeaderRes2}) ;
    }

`;
