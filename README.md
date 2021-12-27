sample spring boot with mvc that uses esbuild  to compile javascript and sass and copy them to the correct location
in the src root; also provides production builds when generating a jar.

to develop you need to run `npm run build` on a terminal and `gradle spring-boot:run` in another.
to generate a jar you just need to `gradle bootJar` it will invoke the `build.js` script directly
and build the assets.
