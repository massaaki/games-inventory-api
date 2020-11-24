'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

const axios = require("axios");

async function getGameInfo(slug) {
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;

  const body = await axios.get(`https://www.gog.com/game/${slug}`)
  const dom = new JSDOM(body.data);

  const rattingElement = dom.window.document.querySelector(
    ".age-restrictions__icon use"
  );

  const description = dom.window.document.querySelector(".description");

  return {
    rating: rattingElement ? rattingElement.getAttribute("xlink:href").replace("#", "").replace("_", "").toLowerCase() : "FREE",
    sort_description: description.textContent.trim().slice(0, 160),
    description: description.innerHTML
  }

}


module.exports = {
  populate: async (params) => {
    const gogApiUrl = `https://www.gog.com/games/ajax/filtered?mediaType=game&page=1&sort=popularity`;
    const { data: { products } } = await axios.get(gogApiUrl);

    console.log(await getGameInfo(products[5].slug));
  }
};
