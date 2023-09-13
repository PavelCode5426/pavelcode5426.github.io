import type Resume from '~/data/models/Resume'
import type { TimelineTitleProps } from '~/modules/core/components/shared/timeline/props'

export interface ResumeTimelineProps extends TimelineTitleProps {
  description: string
  resumens: Resume[]
}
