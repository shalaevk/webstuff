module.exports = {
  siteMetadata: {
    title: "webstuff",
  },
  plugins: [

    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",

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
