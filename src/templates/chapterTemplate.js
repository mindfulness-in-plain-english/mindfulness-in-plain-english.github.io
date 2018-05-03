import React from 'react';

export default function Template({
    data // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;
    return (
        <div className="chapter">
            <h1>{frontmatter.title}</h1>
            <div
                className="chapter-content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    );
}

export const pageQuery = graphql`
    query ChapterByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`;
