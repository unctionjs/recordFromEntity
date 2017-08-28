/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import {{NAME}} from "./index"

test(({same, end}) => {
  same(
    {{NAME}}(true),
    false
  )

  end()
})
