import type { Story } from "../../lib/@types/storybook-emotion-10-fixes"
import { asChromaticStory } from "../../lib/story-intents"
import type { TextAreaProps } from "@guardian/source-react-components"
import { TextArea } from "@guardian/source-react-components"

export default {
  title: "Packages/source-react-components/TextArea",
  component: TextArea,
  argTypes: {
    error: {
      mapping: {
        undefined: undefined,
        error: "Please tell us your views",
      },
    },
    success: {
      mapping: {
        undefined: undefined,
        success: "Thanks for telling us your views",
      },
    },
  },
  args: {
    label: "Comments",
    optional: false,
    hideLabel: false,
    supporting: "",
    error: "undefined",
    success: "undefined",
  },
}

const Template: Story<TextAreaProps> = (args: TextAreaProps) => (
  <TextArea {...args} />
)

// *****************************************************************************

export const DefaultDefaultTheme = Template.bind({})
asChromaticStory(DefaultDefaultTheme)

// *****************************************************************************

export const WithRowsDefaultTheme = Template.bind({})
WithRowsDefaultTheme.args = {
  rows: 10,
}
asChromaticStory(WithRowsDefaultTheme)

// *****************************************************************************

export const OptionalDefaultTheme = Template.bind({})
OptionalDefaultTheme.args = {
  optional: true,
}
asChromaticStory(OptionalDefaultTheme)

// *****************************************************************************

export const VisuallyHideLabelDefaultTheme = Template.bind({})
VisuallyHideLabelDefaultTheme.args = {
  hideLabel: true,
}
asChromaticStory(VisuallyHideLabelDefaultTheme)

// *****************************************************************************

export const SupportingTextDefaultTheme = Template.bind({})
SupportingTextDefaultTheme.args = {
  supporting:
    "Please keep comments respectful and abide by the community guidelines.",
}
asChromaticStory(SupportingTextDefaultTheme)

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

export const WithMaxLengthDefaultTheme = Template.bind({})
WithMaxLengthDefaultTheme.args = {
  maxLength: 10,
}
asChromaticStory(WithMaxLengthDefaultTheme)

// *****************************************************************************
