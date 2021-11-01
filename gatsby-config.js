module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /.svg$/,
        },
      },
    },
    "gatsby-plugin-postcss",
  ],
};
