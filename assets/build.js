const { spawn } = require('child_process')

const esbuildOpts = {
    entryPoints: ['js/app.js'],
    bundle: true,
    minify: process.env.NODE_ENV === 'production',
    sourcemap: process.env.NODE_ENV === 'production',
    watch: process.env.NODE_ENV !== 'production',
    outfile: '../src/main/resources/static/js/app.js',
};

if (process.env.NODE_ENV === 'production') {
    console.log("Starting esbuild for production")
    require('esbuild').buildSync(esbuildOpts);
} else {
    console.log("Starting watch esbuild step")
    require('esbuild').build(esbuildOpts);
}



let sassProcess = undefined;
if (process.env.NODE_ENV === 'production') {
    console.log("Starting sass compilation for production")
    sassProcess = spawn("npx sass ./sass/app.scss:../src/main/resources/static/css/app.css --embed-source-map --style compressed", {shell: true})
} else {
    console.log("Starting sass watch")
    sassProcess = spawn("npx sass ./sass/app.scss:../src/main/resources/static/css/app.css --watch --no-source-map", {shell: true})
}
sassProcess.stderr.on('data', (data) => console.error("Sass STDERR: ", data.toString()))
sassProcess.stdin.on('data', (data) => console.error("Sass STDIN: ", data.toString()))
sassProcess.on('exit', (data) => console.log("Sass exited: ", data.toString()))
sassProcess.on('error', (data) => console.error("Sass Error: ", data.toString()))
