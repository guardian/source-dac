import type { Story } from "../../lib/@types/storybook-emotion-10-fixes"
import { asChromaticStory } from "../../lib/story-intents"
import { Option } from "@guardian/source-react-components"
import type { SelectProps } from "@guardian/source-react-components"
import { Select } from "@guardian/source-react-components"

export default {
  title: "Packages/source-react-components/Select",
  component: Select,
  subcomponents: { Option },
  argTypes: {
    error: {
      mapping: {
        undefined: undefined,
        error:
          "Please select your home state. This service is unavailable outside of the US.",
      },
    },
    success: {
      mapping: {
        undefined: undefined,
        success: "This service is available in your state",
      },
    },
  },
  args: {
    label: "State",
    optional: false,
    hideLabel: false,
    supporting: "",
    error: "undefined",
    success: "undefined",
  },
}

const Template: Story<SelectProps> = (args: SelectProps) => (
  <Select {...args}>
    <Option value="">Select a state</Option>
    <Option value="al">Alabama</Option>
    <Option value="ca">California</Option>
  </Select>
)

// *****************************************************************************

export const DefaultDefaultTheme = Template.bind({})
asChromaticStory(DefaultDefaultTheme)

// *****************************************************************************

export const VisuallyHideLabelDefaultTheme = Template.bind({})
VisuallyHideLabelDefaultTheme.args = {
  hideLabel: true,
}
asChromaticStory(VisuallyHideLabelDefaultTheme)

// *****************************************************************************

export const OptionalDefaultTheme = Template.bind({})
OptionalDefaultTheme.args = {
  optional: true,
}
asChromaticStory(OptionalDefaultTheme)

// *****************************************************************************

export const ErrorWithMessageDefaultTheme = Template.bind({})
ErrorWithMessageDefaultTheme.args = {
  error: "error",
}
asChromaticStory(ErrorWithMessageDefaultTheme)

// *****************************************************************************

export const SuccessWithMessageDefaultTheme = Template.bind({})
SuccessWithMessageDefaultTheme.args = {
  success: "success",
}
asChromaticStory(SuccessWithMessageDefaultTheme)

// *****************************************************************************

export const SupportingTextDefaultTheme = Template.bind({})
SupportingTextDefaultTheme.args = {
  supporting: "Leave blank if you are not within the US",
}
asChromaticStory(SupportingTextDefaultTheme)

// *****************************************************************************
