import React from 'react'

import { HiOutlineCog } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";

import { MdOutlineRealEstateAgent } from "react-icons/md";
import { HiOutlineBriefcase } from "react-icons/hi";
import { RiTruckLine } from "react-icons/ri";
import { MdOutlineRestaurant } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";



export const industriesData = (t) => [
    {
      "title": t("sectionTwo.cards.cardOne.title"),
      "description": t("sectionTwo.cards.cardOne.desc"),
      "p1": t("sectionTwo.cards.cardOne.p1"),
      "p2": t("sectionTwo.cards.cardOne.p2"),
      "p3": t("sectionTwo.cards.cardOne.p3"),
      "icon": <HiOutlineCog />,
      "image": "/assets/industries/manufacturing.webp"
    },
    {
    "title": t("sectionTwo.cards.cardTwo.title"),
      "description": t("sectionTwo.cards.cardTwo.desc"),
      "p1": t("sectionTwo.cards.cardTwo.p1"),
      "p2": t("sectionTwo.cards.cardTwo.p2"),
      "p3": t("sectionTwo.cards.cardTwo.p3"),
      "icon": <HiOutlineShoppingCart/>,
      "image": "/assets/industries/retail.webp"
    },
    {
     "title": t("sectionTwo.cards.cardThree.title"),
      "description": t("sectionTwo.cards.cardThree.desc"),
      "p1": t("sectionTwo.cards.cardThree.p1"),
      "p2": t("sectionTwo.cards.cardThree.p2"),
      "p3": t("sectionTwo.cards.cardThree.p3"),
      "icon": <FaRegHeart />,
      "image": "/assets/industries/health.webp"

    },
    {
       "title": t("sectionTwo.cards.cardFour.title"),
      "description": t("sectionTwo.cards.cardFour.desc"),
      "p1": t("sectionTwo.cards.cardFour.p1"),
      "p2": t("sectionTwo.cards.cardFour.p2"),
      "p3": t("sectionTwo.cards.cardFour.p3"),
      "icon": <MdOutlineRestaurant />,
      "image": "/assets/industries/food.webp"

    },
    {
     "title": t("sectionTwo.cards.cardFive.title"),
      "description": t("sectionTwo.cards.cardFive.desc"),
      "p1": t("sectionTwo.cards.cardFive.p1"),
      "p2": t("sectionTwo.cards.cardFive.p2"),
      "p3": t("sectionTwo.cards.cardFive.p3"),
      "icon": <MdOutlineRealEstateAgent  />,
      "image": "/assets/industries/construction.webp"
    },
    {
      "title": t("sectionTwo.cards.cardSix.title"),
      "description": t("sectionTwo.cards.cardSix.desc"),
      "p1": t("sectionTwo.cards.cardSix.p1"),
      "p2": t("sectionTwo.cards.cardSix.p2"),
      "p3": t("sectionTwo.cards.cardSix.p3"),
      "icon": <HiOutlineBriefcase  />,
      "image": "/assets/industries/services.webp"
    },
    {
      "title": t("sectionTwo.cards.cardSeven.title"),
      "description": t("sectionTwo.cards.cardSeven.desc"),
      "p1": t("sectionTwo.cards.cardSeven.p1"),
      "p2": t("sectionTwo.cards.cardSeven.p2"),
      "p3": t("sectionTwo.cards.cardSeven.p3"),
      "icon": <RiTruckLine  />,
      "image": "/assets/industries/logistics.webp"
    },
    {
      "title": t("sectionTwo.cards.cardEight.title"),
      "description": t("sectionTwo.cards.cardEight.desc"),
      "p1": t("sectionTwo.cards.cardEight.p1"),
      "p2": t("sectionTwo.cards.cardEight.p2"),
      "p3": t("sectionTwo.cards.cardEight.p3"),
      "icon": <HiOutlineAcademicCap  />,
      "image": "/assets/industries/education.webp"
    }
  ];
  