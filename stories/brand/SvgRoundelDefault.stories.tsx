import type { Story } from "../../lib/@types/storybook-emotion-10-fixes"
import { asChromaticStory } from "../../lib/story-intents"
import type { SvgRoundelDefaultProps } from "@guardian/source-react-components"
import { SvgRoundelDefault } from "@guardian/source-react-components"

export default {
  title: "Packages/source-react-components/SvgRoundelDefault",
  component: SvgRoundelDefault,
  argTypes: {
    width: {
      control: { type: "range", min: 10, max: 600 },
    },
  },
}

const Template: Story = (args: SvgRoundelDefaultProps) => (
  <SvgRoundelDefault {...args} />
)
// *****************************************************************************

export const Default = Template.bind({})
asChromaticStory(Default)
