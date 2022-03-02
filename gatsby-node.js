const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query GetExamples {
            allExample(
                sort: { fields: flotiqInternal___createdAt, order: DESC }
            ) {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }
    const examples = result.data.allExample.edges;

    // number of examples per page
    const examplesPerPage = 2;
    const numPages = Math.ceil(examples.length / examplesPerPage);

    // Create paginated index
    Array.from({ length: numPages }).forEach((item, i) => {
        createPage({
            path: i === 0 ? '/' : `/${i + 1}`,
            component: path.resolve('./src/templates/index.js'),
            context: {
                limit: examplesPerPage,
                skip: i * examplesPerPage,
                numPages,
                currentPage: i + 1,
            },
        });
    });

    // Create example pages.
    examples.forEach((example, index) => {
        const previous = index === examples.length - 1 ? null : examples[index + 1].node;
        const next = index === 0 ? null : examples[index - 1].node;

        createPage({
            path: example.node.slug,
            component: path.resolve('./src/templates/example.js'),
            context: {
                slug: example.node.slug,
                previous,
                next,
            },
        });
    });
};
