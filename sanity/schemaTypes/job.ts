export default {
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'company', title: 'Company', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'type', title: 'Type', type: 'string' }, // Full-time, Part-time
    { name: 'link', title: 'Link', type: 'url' },
    { name: 'roleDescription', title: 'Role Description', type: 'text' },
  ],
};