import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  });
  return <div className=" py-5"></div>;
};

export default Hero;
