const { JSDOM } = require("jsdom")
let console = global.console
let window
beforeEach(() => {
  window = (new JSDOM(``, { runScripts: "dangerously" })).window

  // Execute my library by inserting a <script> tag containing it.
  const scriptEl = window.document.createElement("script")
  scriptEl.textContent = 'window.a = 1'
  window.document.body.appendChild(scriptEl)
})

test("test window", () => {
  expect(window.a).toBe(1)
  expect(typeof navigator).toBe('object')
})


test("test navigator", () => {
  expect(typeof navigator).toBe('object')
  console.log(navigator)
})