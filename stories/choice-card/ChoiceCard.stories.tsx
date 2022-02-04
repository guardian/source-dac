import type { Story } from "../../lib/@types/storybook-emotion-10-fixes"
import { asChromaticStory } from "../../lib/story-intents"
import { SvgCamera } from "@guardian/source-react-components"
import { ChoiceCard } from "@guardian/source-react-components"
import type { ChoiceCardProps } from "@guardian/source-react-components"

export default {
  title: "Packages/source-react-components/ChoiceCard",
  component: ChoiceCard,
  args: {
    id: "option-1-id",
    value: "option-1",
    label: "string",
  },
  argTypes: {
    label: {
      mapping: {
        string: "Option 1",
        "JSX element": <em>Option 1</em>,
      },
    },
    defaultChecked: {
      control: { disable: true },
    },
    icon: {
      mapping: {
        undefined: undefined,
        "JSX element": <SvgCamera />,
      },
    },
    onChange: { action: "choice changed" },
  },
}

const Template: Story<ChoiceCardProps> = (args: ChoiceCardProps) => (
  <ChoiceCard {...args} />
)

// *****************************************************************************

export const DefaultDefaultTheme = Template.bind({})
asChromaticStory(DefaultDefaultTheme)

// *****************************************************************************

export const CheckedDefaultTheme = Template.bind({})
CheckedDefaultTheme.args = {
  checked: true,
}
asChromaticStory(CheckedDefaultTheme)

// *****************************************************************************

export const ErrorDefaultTheme = Template.bind({})
ErrorDefaultTheme.args = {
  error: true,
}
asChromaticStory(ErrorDefaultTheme)

// *****************************************************************************

export const IconDefaultTheme = Template.bind({})
IconDefaultTheme.args = {
  icon: "JSX element",
}
asChromaticStory(IconDefaultTheme)
