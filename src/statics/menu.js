import cog_white from "../assets/cog-white.svg";
import project_selected_dark from "../assets/project-selected-dark.svg";
import mast_clolor_white from "../assets/mast-color-white.svg";
import wind_direction_white from "../assets/wind-direction-white.svg";
import wind_speed from "../assets/wind-speed.svg";
import pressure_white from "../assets/pressure-white.svg";
import temperature_white from "../assets/temperature-white.svg";

export const menu = [
  {
    id: 1,
    leftIcon: project_selected_dark,
    rightIcon: cog_white,
    text: "Project name 1",
  },
];

export const mainMenu = [
  {
    id: 1,
    leftIcon: mast_clolor_white,
    text: "Tower name 1",
  },
  {
    id: 2,
    leftIcon: mast_clolor_white,
    text: "Tower name 2",
  },
  {
    id: 3,
    leftIcon: mast_clolor_white,
    text: "Tower name 3",
  },
  {
    id: 4,
    leftIcon: mast_clolor_white,
    text: "Tower name 4",
  },
  {
    id: 5,
    leftIcon: mast_clolor_white,
    text: "Tower name 5",
  },
  {
    id: 6,
    leftIcon: mast_clolor_white,
    text: "Tower name 6",
  },
  {
    id: 7,
    leftIcon: mast_clolor_white,
    text: "Tower name 7",
  },
  {
    id: 8,
    leftIcon: mast_clolor_white,
    text: "Tower name 8",
  },
];

export const subMenu = [
  {
    id: 1,
    text: "Location Properties",
  },
  {
    id: 2,
    text: "Logger",
  },
  {
    id: 3,
    text: "Measurements",
  },
  {
    id: 4,
    text: "Maintenance",
  },
  {
    id: 5,
    text: "Calibration",
  },
];

export const subOfSubMenu = [
  {
    id: 1,
    leftIcon: wind_speed,
    text: "Wind Speed @ 60m , E",
  },
  {
    id: 2,
    leftIcon: wind_speed,
    text: "Wind Speed @ 60m , W",
  },
  {
    id: 3,
    leftIcon: wind_speed,
    text: "Wind Speed @ 50m , E",
  },
  {
    id: 4,
    leftIcon: wind_speed,
    text: "Wind Speed @ 30m , E",
  },
  {
    id: 5,
    leftIcon: wind_direction_white,
    text: "Wind Dir @ 50m, W",
  },
  {
    id: 6,
    leftIcon: wind_direction_white,
    text: "Wind Dir @ 30m, W",
  },
  {
    id: 7,
    leftIcon: wind_direction_white,
    text: "Wind Dir @ 40m, W",
  },
  {
    id: 8,
    leftIcon: temperature_white,
    text: "Temperature @ 60m",
  },
  {
    id: 9,
    leftIcon: temperature_white,
    text: "Temperature @ 50m",
  },
  {
    id: 10,
    leftIcon: pressure_white,
    text: "Pressure @ Ground",
  },
];
