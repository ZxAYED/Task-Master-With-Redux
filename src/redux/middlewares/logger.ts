const logger = (state) => (next) => (action) => {
    console.group(action.type)
    console.info("prev State", state.getState())
    console.info("Next state ", state.getState());
    console.groupEnd()
    return next(action)
}
export default logger