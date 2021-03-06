import type { Story } from "../../lib/@types/storybook-emotion-10-fixes"
import { asChromaticStory } from "../../lib/story-intents"
import type { AccordionProps } from "@guardian/source-react-components"
import { Accordion } from "@guardian/source-react-components"
import { AccordionRow } from "@guardian/source-react-components"

export default {
  title: "Packages/source-react-components/Accordion",
  component: Accordion,
  subcomponents: { AccordionRow },
  args: {
    hideToggleLabel: false,
  },
}

const Template: Story<AccordionProps> = (args: AccordionProps) => (
  <Accordion {...args}>
    <AccordionRow label="Collecting from multiple newsagents">
      Present your card to a newsagent each time you collect the paper. The
      newsagent will scan your card and will be reimbursed for each transaction
      automatically.
    </AccordionRow>
    <AccordionRow label="Delivery from your retailer">
      Simply give your preferred store / retailer the barcode printed on your
      subscription letter.
    </AccordionRow>
  </Accordion>
)

// *****************************************************************************

export const WithCTALabelsDefaultTheme = Template.bind({})
asChromaticStory(WithCTALabelsDefaultTheme)

// *****************************************************************************

export const WithoutCTALabelsDefaultTheme = Template.bind({})
WithoutCTALabelsDefaultTheme.args = {
  hideToggleLabel: true,
}
asChromaticStory(WithoutCTALabelsDefaultTheme)
