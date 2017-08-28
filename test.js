/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import {{NAME}} from "./"

test(({same, end}) => {
  same(
    {{NAME}}(true),
    false
  )

  end()
})
