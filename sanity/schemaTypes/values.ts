export default {
    name: 'values',
    title: 'Our Values Grid',
    type: 'document',
    fields: [
        { name: 'title', title: 'Main Title', type: 'string' },
        { name: 'description1', title: 'Description Paragraph 1', type: 'text' },
        { name: 'description2', title: 'Description Paragraph 2', type: 'text' },
        {
            name: 'cards',
            title: 'Value Cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Card Title', type: 'string' },
                        { name: 'description', title: 'Card Description', type: 'text' },
                    ]
                }
            ]
        }
    ],
};
