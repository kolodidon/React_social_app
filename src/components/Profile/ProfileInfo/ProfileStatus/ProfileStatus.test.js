import {create} from 'react-test-renderer';
import React from 'react'
import ProfileStatus from './ProfileStatus'

describe("ProfileStatus Component", () => {
    test("Status from props should get in the local state", () => {
        const component = create(<ProfileStatus status="YoYo"/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("YoYo")
    })
    test("Component should have <span> in its initial state", () => {
        const component = create(<ProfileStatus status="YoYo"/>)
        const root = component.root
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    })
    test("Component shouldn't have <input> in its initial state", () => {
        const component = create(<ProfileStatus status="YoYo"/>)
        const root = component.root
        expect(() => {
            let input = root.findByType("input")
        }).toThrow()
    })
    test("Component should have <span> with expected status from props", () => {
        const component = create(<ProfileStatus status="YoYo"/>)
        const root = component.root
        let span = root.findByType("span")
        expect(span.children[0]).toBe("YoYo")
    })
    test("Input should be displayed after entering EditMode", () => {
        const component = create(<ProfileStatus status="YoYo" userId={null} myId={1} isAuth={true}/>)
        const root = component.root
        let button = root.findByType("button")
        button.props.onClick()
        let input = root.findByType("input")
        expect(input).not.toBeNull()
    })
    test("Input should contain current status", () => {
        const component = create(<ProfileStatus status="YoYo" userId={null} myId={1} isAuth={true}/>)
        const root = component.root
        let button = root.findByType("button")
        button.props.onClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe("YoYo")
    })
    test("changeUserStatusThunkCreator callback should be able to call", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="YoYo" userId={null} myId={1} isAuth={true} changeUserStatusThunkCreator={mockCallback}/>)
        const instance = component.getInstance()
        instance.unToggleEdit()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})
