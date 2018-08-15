import { 
  SET_APRONS,
  SET_ITEM_ACTIVE
} from './types';

export function setItemActive(_id) {
  return ({
    type: SET_ITEM_ACTIVE,
    payload: _id,
  })
}

export function itemPrice(price) {
  return ({
    type: SET_ITEM_PRICE,
    payload: price
  })
}

export function fetchAprons() {
    return ({
       type: SET_APRONS,
       payload:  [
        {
          _id: 0,
          title: "black apron",
          pic:
            "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/787_XXX_v1.tif&wid=650&cvt=jpeg",
          description: "Description goes here",
          price: 25.95,
          active: false,
          apron_type: "infant"
        },
        {
          _id: 1,
          title: "black apron",
          pic:
            "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/787_XXX_v1.tif&wid=650&cvt=jpeg",
          description: "Description goes here",
          price: 22.95,
          active: false,
          apron_type: "infant"
        },
        {
          _id: 2,
          title: "black",
          pic:
            "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/787_XXX_v1.tif&wid=650&cvt=jpeg",
          description: "Description goes here",
          price: 24.95,
          active: false,
          apron_type: "infant"
        },
        {
          _id: 3,
          title: "black",
          pic:
            "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/787_XXX_v1.tif&wid=650&cvt=jpeg",
          description: "description goes here",
          price: 18.95,
          active: false,
          apron_type: "toddler"
        },
        {
          _id: 4,
          title: "black",
          pic:
            "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/787_XXX_v1.tif&wid=650&cvt=jpeg",
          description: "Description goes here",
          price: 24.95,
          active: false,
          apron_type: "toddler"
        },
        {
          _id: 5,
          title: "black",
          pic:
            "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/787_XXX_v1.tif&wid=650&cvt=jpeg",
          description: "Description goes here",
          price: 14.95,
          active: false,
          apron_type: "toddler"
        },
        {
          _id: 6,
          title: "black",
          pic:
            "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/787_XXX_v1.tif&wid=650&cvt=jpeg",
          description: "Description goes here",
          price: 21.95,
          active: false,
          apron_type: "child"
        },
        {
          _id: 7,
          title: "black",
          pic:
            "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/787_XXX_v1.tif&wid=650&cvt=jpeg",
          description: "Description goes here",
          price: 32.95,
          active: false,
          apron_type: "child"
        },
        {
          _id: 8,
          title: "black",
          pic:
            "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/787_XXX_v1.tif&wid=650&cvt=jpeg",
          description: "Description goes here",
          price: 24.95,
          active: false,
          apron_type: "child"
        },
      ] 
    })
}