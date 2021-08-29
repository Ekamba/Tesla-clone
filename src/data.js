import { Language } from "@material-ui/icons";
import styled from "styled-components";

export const menuItems = [
  { name: "Existing Inventory" },
  { name: "used Inventory" },
  { name: "Trade-In" },
  { name: "Test Drive" },
  { name: "Cybertruck" },
  { name: "Roadster" },
  { name: "Semi" },
  { name: "Charging" },
  { name: "Powerwall" },
  { name: "Commercial Energy" },
  { name: "Utilities" },
  { name: "Find Us" },
  { name: "Support" },
  { name: "Investor Relations" },
  { name: "united states" },
  { name: "English" },
  { name: <Language /> },
];

const Subtitle = styled.h4`
  font-weight: 400;
  font-size: 15px;
  color: #5c5e62;
  span {
    padding-bottom: 4px;
    padding-top: 15px;
    border-bottom: 1px solid black;
    color: #393c41;
    cursor: pointer;
  }
  span:hover {
    border-bottom-width: 2px;
    color: black;
  }
`;

export const CarItems = [
  {
    id: 0,
    title: "Model S",
    description: (
      <Subtitle>
        Order Online for <span>Touchless Delivery</span>
      </Subtitle>
    ),
    image: "model-s.jpg",
    range: "390",
    time: "1.99",
    topSpeed: "200",
    peakPower: "1,020",
  },
  {
    id: 1,
    title: "Model Y",
    description: (
      <Subtitle>
        Order Online for <span>Touchless Delivery</span>
      </Subtitle>
    ),
    image: "model-y.jpg",
    range: "410",
    time: "2.05",
    topSpeed: "190",
    peakPower: "1,040",
  },
  {
    id: 2,
    title: "Model 3",
    description: (
      <Subtitle>
        Order Online for <span>Touchless Delivery</span>
      </Subtitle>
    ),
    image: "model-3.jpg",
    range: "400",
    time: "2.99",
    topSpeed: "180",
    peakPower: "900",
    paragraph:
      "Model 3 received the highest Safety Assist score of any car in 2019, and 5-starts overall rating from Euro NCAP",
  },
  {
    id: 3,
    title: "Model X",
    description: (
      <Subtitle>
        Order Online for <span>Touchless Delivery</span>
      </Subtitle>
    ),
    image: "model-x.jpg",
    range: "350",
    time: "1.55",
    topSpeed: "150",
    peakPower: "1,130",
  },
];
