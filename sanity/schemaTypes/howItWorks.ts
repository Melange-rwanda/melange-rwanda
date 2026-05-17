export default {
    name: 'howItWorks',
    title: 'How It Works Section',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Our partnership model: how it works',
        },
        {
            name: 'image',
            title: 'Side Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'steps',
            title: 'Steps',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Step Title',
                            type: 'string',
                        },
                        {
                            name: 'description',
                            title: 'Step Description',
                            type: 'text',
                        },
                    ],
                },
            ],
        },
    ],
}
