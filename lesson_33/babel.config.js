const setUp = {
    presets: [
        ['@babel/preset-env', {"targets": {"node": "current"}}],
        ['@babel/preset-react', {runtime: 'automatic'}],
    ],
}

export default setUp;