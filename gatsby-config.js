module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "webstuff portafolio",
  },
  plugins: [

    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/fav.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "public",
      },
      __key: "images",
    },
  ],
};
