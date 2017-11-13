/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import recordFromEntity from "./index"

test(({same, end}) => {
  same(
    recordFromEntity(
      [
        "name",
      ]
    )(
      [
        "value",
      ]
    )(
      {
        name: "id",
        value: "application",
      }
    ),
    {id: "application"}
  )

  end()
})

test(({same, end}) => {
  same(
    recordFromEntity(
      [
        "name",
      ]
    )(
      [
        "value",
      ]
    )(
      {
        name: [
          "data",
          "id",
        ],
        value: 1,
      }
    ),
    {data: {id: 1}}
  )

  end()
})
