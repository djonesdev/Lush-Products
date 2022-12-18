const push = jest.fn().mockResolvedValue(true);

export const routerMock = {
    basePath: "",
    pathname: "/",
    route: "/",
    asPath: "/",
    query: {},
    push,
    replace: jest.fn().mockResolvedValue(true),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
};