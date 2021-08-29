import React from "react";
import styled from "styled-components";
import HeaderBlockItems from "./SectionItems";
import { CarItems } from "../../data";

const HeaderBlock = () => {
  return (
    <Container>
      {CarItems.map((item) => (
        <ul key={item.id}>
          <HeaderBlockItems
            title={item.title}
            description={item.description}
            paragraph={item.paragraph}
            backgroundImg={item.image}
            leftBtnText="Custom order"
            rightBtnText="Existing Inventory"
          />
        </ul>
      ))}
      <HeaderBlockItems
        title="Solar and Powerwall"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Existing Inventory"
      />
      <HeaderBlockItems
        title="Solar for New Roofs"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Existing Inventory"
      />
      <HeaderBlockItems
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
      />
    </Container>
  );
};

export default HeaderBlock;

const Container = styled.div`
  height: 100vh;
`;
