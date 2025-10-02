import {person} from './documents/person'
import {page} from './documents/page'
import {post} from './documents/post'
import {caseStudy} from './documents/caseStudy'
import {teamMember} from './documents/teamMember'
import {service} from './documents/service'
import {homepage} from './documents/homepage'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'

export const schemaTypes = [
  // Singletons
  settings,
  homepage,
  // Documents
  page,
  post,
  person,
  caseStudy,
  teamMember,
  service,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
]
