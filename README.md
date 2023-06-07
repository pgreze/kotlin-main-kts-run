# Kotlin main kts run

This simple github action will execute the provided code as
a [kotlin-main-kts script](https://github.com/Kotlin/kotlin-script-examples/blob/master/jvm/main-kts/MainKts.md).

This is an alternative to the [setup-kotlin optional script parameter](https://github.com/fwilhe2/setup-kotlin#running-a-script-inline),
assuming kotlin is already installed (which is the default with ubuntu-latest).

Usage:
```yaml
    - uses: pgreze/kotlin-main-kts-run@v1
      with:
        script: |
            println("Hello from kotlin")
```

## FAQ

> Why not just use `run:` with `shell: kotlin {0}`?

Because `run:` code is stored in a random generated name,
but the kotlin compiler is expecting a filename suffixed with `.main.kts`
which is not possible without extra logic/steps.
This action is allowing a one-step declaration without hack.
