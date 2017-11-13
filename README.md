# @unction/recordFromEntity

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> KeyChainType -> KeyChainType -> KeyedFunctorType -> RecordType

Takes a keyed functor that looks like an entity (keys are pointers to both keys and values) and turns them into an non-entity record.

``` javascript
recordFromEntity(
  ["name"]
)(
  ["value"]
)(
  {
    name: "id",
    value: "application"
  }
)
```

which returns

``` javascript
{
  id: "application"
}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/recordFromEntity.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/recordFromEntity.svg?maxAge=2592000&style=flat-square
