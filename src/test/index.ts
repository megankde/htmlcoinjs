import { assert } from "chai"

import { HtmlcoinRPC } from "../HtmlcoinRPC"

export const rpcURL = "http://htmlcoin:test@localhost:5889"

export const rpc = new HtmlcoinRPC(rpcURL)

export const repoData = require("../../solar.development.json")

export async function assertThrow(
  fn: () => Promise<any>,
  msg?: string,
  report?: (err: any) => void,
) {
  let errorThrown: any = null

  try {
    await fn()
  } catch (err) {
    errorThrown = err
  }

  // assert.erro
  if (errorThrown && report) {
    report(errorThrown)
  }

  assert(errorThrown != null, msg ? `Expects error to be thrown: ${msg}` : "Expects error to be thrown")

  // assert.isNotNull(errorThrown, )
}
