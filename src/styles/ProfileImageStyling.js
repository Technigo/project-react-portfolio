import styled from 'styled-components';

const ProfileImage = styled.section`
.profile-pic {
  position: absolute;
  width: 31vw;
  height: 31vw;
  left:60%;
  top: 31.5%;
  border-radius: 50%;
  background: url("./images/profile_pic2.jpg");
  background-position: -30px 560px;
  background-size: 232px;

}
/* Galaxy S8+ */
@media (min-width: 350px) and (max-width: 370px){
  position: absolute;
  left:60%;
  top: 33%;
}
/* Iphone SE, 12 mini */
@media (min-width: 371px) and (max-width: 389px){
  position: absolute;
  left:60%;
  top: 38.5%;
}

@media (min-width: 667px) and (max-width: 1024px){
  .profile-pic{
  position: absolute;
  left:60%;
  top: 52%;
  width: 28vw;
  height: 28vw;
  background-position: -0px 760px;
  background-size: 300px;
}
}

@media (min-width: 1024px) {
  .profile-pic{
    position: absolute;
    left:60%;
    top: 52%;
    width: 18vw;
    height: 18vw;
    background-position: -0px 760px;
    background-size: 300px;
  
}

`

export default ProfileImage