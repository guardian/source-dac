import type { Story } from "../../lib/@types/storybook-emotion-10-fixes"
import { asChromaticStory } from "../../lib/story-intents"
import type { SvgRoundelInverseProps } from "@guardian/source-react-components"
import { SvgRoundelInverse } from "@guardian/source-react-components"

export default {
  title: "Packages/source-react-components/SvgRoundelInverse",
  component: SvgRoundelInverse,
  argTypes: {
    width: {
      control: { type: "range", min: 10, max: 600 },
    },
  },
}

const Template: Story = (args: SvgRoundelInverseProps) => (
  <SvgRoundelInverse {...args} />
)

// *****************************************************************************

export const Default = Template.bind({})
asChromaticStory(Default)
