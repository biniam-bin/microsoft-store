import React, { useState } from "react";
import {
  HeroContainer,
  HomeContainer,
  HeroInfo,
  HeroInfoContainer,
  HeroCardsContainer,
  HeroCardContainer,
  TopFreeContainer,
  TopCardsContainer,
  TopCardContainer,
} from "./style";
import Carousel from "react-elastic-carousel";
import StarRatings from "react-star-ratings";
import Link from "next/link";

const HeroCard: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <HeroCardContainer
      onMouseOut={() => setHover(false)}
      onMouseOver={() => setHover(true)}
    >
      <img src="/images/h1.jpg" alt="" />
      {hover && (
        <div>
          <h3>Racing game</h3>
        </div>
      )}
    </HeroCardContainer>
  );
};

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <img src="/images/h1.jpg" alt="" />
      <HeroInfoContainer>
        <HeroInfo>
          <div className="text">
            <h1>Racing games</h1>
            <p>Levelup your high speed action</p>
            <button>See more</button>
          </div>
        </HeroInfo>
        <HeroCardsContainer>
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
        </HeroCardsContainer>
      </HeroInfoContainer>
    </HeroContainer>
  );
};

const FreeCard: React.FC = () => {
  return (
    <TopCardContainer>
      <img src="/images/xbox.jpg" />
      <div className="content">
        <p className="name">Xbox</p>
        <p className="cat">Entertainment</p>
        <span className="rating">
          <StarRatings
            rating={2.5}
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
            name="rating"
          />
        </span>
      </div>
      <div className="lable">
        <span>Free</span>
      </div>
    </TopCardContainer>
  );
};

const TopFree: React.FC = () => {
  return (
    <TopFreeContainer>
      <div className="title">
        <h3>Top free apps</h3>
        <p>
          <Link href="/">See all</Link>
        </p>
      </div>
      <TopCardsContainer>
        <FreeCard />
        <FreeCard />
        <FreeCard />
        <FreeCard />
        <FreeCard />
        <FreeCard />
      </TopCardsContainer>
    </TopFreeContainer>
  );
};

function HomePage() {
  return (
    <HomeContainer>
      <Hero />
      <TopFree />
    </HomeContainer>
  );
}

export default HomePage;
