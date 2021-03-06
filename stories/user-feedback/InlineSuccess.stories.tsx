import type { Story } from "../../lib/@types/storybook-emotion-10-fixes"
import { asChromaticStory } from "../../lib/story-intents"
import { InlineSuccess } from "@guardian/source-react-components"
import { userFeedbackThemeBrand } from "@guardian/source-react-components"
import type { UserFeedbackProps } from "@guardian/source-react-components"

export default {
  title: "Packages/source-react-components/InlineSuccess",
  component: InlineSuccess,
}

const Template: Story<UserFeedbackProps> = (args: UserFeedbackProps) => (
  <InlineSuccess {...args}>Your voucher code is valid</InlineSuccess>
)

// *****************************************************************************

export const InlineSuccessDefaultTheme = Template.bind({})
asChromaticStory(InlineSuccessDefaultTheme)

// *****************************************************************************

export const InlineSuccessBrandTheme = Template.bind({})
InlineSuccessBrandTheme.parameters = {
  backgrounds: {
    default: "brandBackground.primary",
  },
  theme: userFeedbackThemeBrand,
}
asChromaticStory(InlineSuccessBrandTheme)
