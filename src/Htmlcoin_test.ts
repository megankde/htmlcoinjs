import "mocha"

import { assert } from "chai"

import { rpcURL, repoData } from "./test"
import { Htmlcoin } from "./Htmlcoin"
import { Contract } from "./Contract"

describe("Htmlcoin", () => {
  const htmlcoin = new Htmlcoin(rpcURL, repoData)

  it("can instantiate a contract", () => {
    const contract = htmlcoin.contract("test/contracts/Methods.sol")
    assert.instanceOf(contract, Contract)
  })

  it("throws an error if contract is not known", () => {
    // assertThrow
    assert.throw(() => {
      htmlcoin.contract("test/contracts/Unknown.sol")
    })
  })
})
