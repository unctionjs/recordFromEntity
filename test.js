/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import tempLate from "./source.js"

test(({same, end}) => {
  same(
    tempLate(true),
    false
  )

  end()
})
