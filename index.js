import keyChain from "@unction/keychain"
import recordFrom from "@unction/recordfrom"
import arrayify from "@unction/arrayify"

export default function recordFromEntity (keyKey: KeyChainType): UnaryFunctionType {
  const keyChainValue: KeyType | KeyChainType = keyChain(keyKey)

  return function recordFromEntityKeyKey (valueKey: KeyChainType): UnaryFunctionType {
    const valueChainValue: ValueType = keyChain(valueKey)

    return function recordFromEntityKeyKeyValueKey (source: KeyedFunctorType): RecordType {
      return recordFrom(
        arrayify(keyChainValue(source))
      )(
        valueChainValue(source)
      )
    }
  }
}
