export default {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        {
            name: 'companyTitle',
            title: 'Company Title',
            type: 'string',
            initialValue: 'Mélange Rwanda',
        },
        {
            name: 'companyDescription',
            title: 'Company Description',
            type: 'text',
            initialValue: 'Empowering Rwanda’s youth through quality education, skills development, and meaningful career opportunities.',
        },
        {
            name: 'contactInfo',
            title: 'Contact Information',
            type: 'object',
            fields: [
                {
                    name: 'location',
                    title: 'Location',
                    type: 'string',
                    initialValue: 'Kigali, Rwanda',
                },
                {
                    name: 'email',
                    title: 'Email Address',
                    type: 'string',
                    initialValue: 'hello@melangerwanda.org',
                },
                {
                    name: 'phone1',
                    title: 'Phone Number 1',
                    type: 'string',
                    initialValue: '+250 (0) 792 9488 848',
                },
                {
                    name: 'phone2',
                    title: 'Phone Number 2',
                    type: 'string',
                    initialValue: '+250 (0) 727 666 338',
                },
                {
                    name: 'whatsapp',
                    title: 'WhatsApp Number',
                    type: 'string',
                    initialValue: '+250 (0) 788 123 456',
                },
            ],
        },
        {
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'object',
            fields: [
                {
                    name: 'linkedin',
                    title: 'LinkedIn URL',
                    type: 'url',
                    initialValue: 'https://linkedin.com',
                },
                {
                    name: 'twitter',
                    title: 'Twitter URL',
                    type: 'url',
                    initialValue: 'https://twitter.com',
                },
                {
                    name: 'facebook',
                    title: 'Facebook URL',
                    type: 'url',
                    initialValue: 'https://facebook.com',
                },
            ],
        },
    ],
}