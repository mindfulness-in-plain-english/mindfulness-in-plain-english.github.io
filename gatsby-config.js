module.exports = {
    siteMetadata: {
        title: 'Mindfulness in Plain English'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/book/`,
                name: 'markdown-pages'
            }
        }
    ]
};
