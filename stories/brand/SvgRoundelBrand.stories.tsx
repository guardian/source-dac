import type { Story } from "../../lib/@types/storybook-emotion-10-fixes"
import { asChromaticStory } from "../../lib/story-intents"
import type { SvgRoundelBrandProps } from "@guardian/source-react-components"
import { SvgRoundelBrand } from "@guardian/source-react-components"

export default {
  title: "Packages/source-react-components/SvgRoundelBrand",
  component: SvgRoundelBrand,
  argTypes: {
    width: {
      control: { type: "range", min: 10, max: 600 },
    },
  },
}

const Template: Story = (args: SvgRoundelBrandProps) => (
  <SvgRoundelBrand {...args} />
)

// *****************************************************************************

export const Default = Template.bind({})
asChromaticStory(Default)
