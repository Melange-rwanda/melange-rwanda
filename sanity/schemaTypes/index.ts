import { type SchemaTypeDefinition } from 'sanity'
import job from './job'
import mission from './mission'
import about from './about'
import values from './values'
import story from './story'
import process from './process'
import hero from './hero'
import parallax from './parallax'
import faq from './faq'
import generalApplication from './generalApplication'
import footer from './footer'
import howItWorks from './howItWorks'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [job, mission, about, values, story, process, hero, parallax, faq, generalApplication, footer, howItWorks],
}
