import type { Story } from "../../lib/@types/storybook-emotion-10-fixes"
import { asChromaticStory } from "../../lib/story-intents"
import { Radio } from "@guardian/source-react-components"
import type { RadioProps } from "@guardian/source-react-components"
import { radioThemeBrand } from "@guardian/source-react-components"

// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';

export default {
  title: "Packages/source-react-components/Radio",
  component: Radio,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    supporting: {
      control: {
        type: "text",
      },
    },
    cssOverrides: {
      control: null,
    },
  },
  args: {
    label: "Red",
    value: "red",
    supporting: "",
    checked: true,
  },
}

const Template: Story = (args: RadioProps) => <Radio {...args} />

// *****************************************************************************

export const DefaultDefaultTheme = Template.bind({})
asChromaticStory(DefaultDefaultTheme)

// *****************************************************************************

export const DefaultBrandTheme = Template.bind({})
DefaultBrandTheme.parameters = {
  backgrounds: {
    default: "brandBackground.primary",
  },
  theme: radioThemeBrand,
}
asChromaticStory(DefaultBrandTheme)

// *****************************************************************************

export const SupportingTextDefaultTheme = Template.bind({})
SupportingTextDefaultTheme.args = {
  supporting: "#ff0000",
}
asChromaticStory(SupportingTextDefaultTheme)

// *****************************************************************************

export const SupportingTextBrandTheme = Template.bind({})
SupportingTextBrandTheme.parameters = {
  backgrounds: {
    default: "brandBackground.primary",
  },
  theme: radioThemeBrand,
}
SupportingTextBrandTheme.args = {
  supporting: "#ff0000",
}
asChromaticStory(SupportingTextBrandTheme)

// *****************************************************************************

export const SupportingTextOnlyDefaultTheme = Template.bind({})
SupportingTextOnlyDefaultTheme.args = {
  supporting: "#ff0000",
  label: null,
}
asChromaticStory(SupportingTextOnlyDefaultTheme)

// *****************************************************************************

export const SupportingTextOnlyBrandTheme = Template.bind({})
SupportingTextOnlyBrandTheme.parameters = {
  backgrounds: {
    default: "brandBackground.primary",
  },
  theme: radioThemeBrand,
}
SupportingTextOnlyBrandTheme.args = {
  supporting: "#ff0000",
  label: null,
}
asChromaticStory(SupportingTextOnlyBrandTheme)

// *****************************************************************************

export const UnlabelledDefaultTheme = Template.bind({})
UnlabelledDefaultTheme.args = {
  label: undefined,
}
asChromaticStory(UnlabelledDefaultTheme)
