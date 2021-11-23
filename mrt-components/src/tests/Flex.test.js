import React from 'react'
import { render, cleanup } from '@testing-library/react'

// TODO: use absolute imports
import { Flex } from '../lib'

// remove element from DOM after test
afterEach(cleanup)

test('<Flex />', () => {
  const { 
    debug, 
    getByTestId, // if its not there test will fail
  } = render(
    <Flex 
      label="MY-TEST-LABEL: FLEX"
      testId="FLEX-TEST-ID"
    />
  )

  // fetch component
  const flex_component = getByTestId("FLEX-TEST-ID")

  // can find by testid
  expect(flex_component)
})