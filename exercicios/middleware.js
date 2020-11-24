const exec = (ctx, ...middlewares) => {
    const run = current => {
        middlewares && current < middlewares.length && middlewares[current](ctx, () => run(current +1))
    }
    run(0)
}

const mid1 = (ctx, next) => {
    ctx.info1 = "mid1"
    next()
}

const mid2 = (ctx, next) => {
    ctx.info2 = "mid2"
    next()
}

const mid3 = (ctx, next) => {
    ctx.info3 = "mid3"
    next()
}

const mid4 = ctx => ctx.info4 = "mid4"

const ctx = {}

exec(ctx,mid1,mid2,mid3,mid4)

console.log(ctx)