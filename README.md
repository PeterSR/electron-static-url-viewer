# electron-static-url-viewer

Do you have a simple website or web app with a public url that you would like to open in a standalone browser window with minimal window frame as if it was a native app?

This simple Electron app allows you to do this. You can simply specify a url as an environment variable and it quickly opens a new slim window for you.


## Dependencies

```
npm install
```


## How to run

```
URL=https://example.com npx election .
```

By default the session of the window will be persistent based on the url.
In other words, if you run multiple Electron apps like the above,
their sessions will be different if the urls are different.

You can specify a desired session partition using the `SESSION_PARTITION` environment variable. Example:

```
URL=https://example.com SESSION_PARTITION=example-pages npx electron .
```

and

```
URL=https://example.org SESSION_PARTITION=example-pages npx electron .
```

These will now share the same session.

Finally, you can make the session non-persistent by specifying `SESSION_PERSIST=false` as environment variable.