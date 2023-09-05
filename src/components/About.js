import Profile from "./Profile";
// import { Outlet } from "react-router-dom";


const About = () => {
  return (
    <div>
      <h1>This is About Page</h1>
      <p>This is the details of the about page</p>
      <Profile name={"Subham"} abc="xyz"/>
    </div>
  );
};

export default About;
