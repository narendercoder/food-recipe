import React from "react";
import { styled } from "styled-components";

const About = () => {
  return (
    <Wrapper className="about relative flex justify-center items-center">
      <div className="custom-container flex w-full flex-wrap">
        <div className="relative about-bg w-full h-full md:w-1/2">
          <div className="background-image">
            <img
              src="https://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/home-cooked-happiness.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="p-10 w-full md:w-1/2">
          <div className="mb-5">
            <h6 className="text-red-600 text-base capitalize">Who we are</h6>
          </div>
          <div className="mb-5">
            <h1 className="text-4xl font-bold capitalize">
              One thousand flavors in one place
            </h1>
          </div>
          <div>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              consequuntur necessitatibus quasi veniam, ut laudantium ipsa ab
              voluptatibus accusamus expedita ratione et eius pariatur rem nemo.
              Accusamus autem quas dicta!
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
padding: 7rem 0;
  .custom-container {
    max-width: 1280px;

    .about-bg {
      .background-image {
        img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          object-position: center center;
          border-radius: 10px 10px 10px 10px;
          vertical-align: middle;
          display: inline-block;
          max-width: 100%;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .custom-container {
      max-width: 767px !important;
    }
  }

  @media (max-width: 1024px) {
    .custom-container {
      max-width: 1024px !important;
    }
  }
  @media (max-width: 1024px){
    padding: 3em 2em 3em 2em;
}
`;
