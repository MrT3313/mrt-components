import React from 'react'
import { render, cleanup } from '@testing-library/react'

// TODO: use absolute imports
import { Button } from '../lib'

// remove element from DOM after test
afterEach(cleanup)

test('<Flex />', () => {
  const { 
    debug, 
    getByTestId, // if its not there test will fail
  } = render(
    <Button 
      label="MY-TEST-LABEL: BUTTON"
      testId="BUTTON-TEST-ID"
    />
  )

  // fetch component
  const button_component = getByTestId("BUTTON-TEST-ID")

  // can find by testid
  expect(button_component)
})