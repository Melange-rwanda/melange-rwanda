export default {
    name: 'generalApplication',
    title: 'General Application',
    type: 'document',
    fields: [
        {
            name: 'link',
            title: 'Application Link',
            type: 'url',
            description: 'The URL for the general application form (e.g., Google Forms link)'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Description text to show above the submit application button'
        }
    ],
};
