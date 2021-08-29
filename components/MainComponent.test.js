const MainComponent = require("./MainComponent")
// @ponicode
describe("onDishSelect", () => {
    let inst

    beforeEach(() => {
        inst = new MainComponent()
    })

    test("0", () => {
        let callFunction = () => {
            inst.onDishSelect("^5.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onDishSelect("1.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onDishSelect("v1.2.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onDishSelect("4.0.0-beta1\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.onDishSelect("v4.0.0-rc.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.onDishSelect(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
