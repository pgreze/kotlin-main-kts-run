# Kotlin main kts run

This simple github action will execute the provided code as
a [kotlin-main-kts script](https://github.com/Kotlin/kotlin-script-examples/blob/master/jvm/main-kts/MainKts.md).

This is an alternative to the [setup-kotlin optional script parameter](https://github.com/fwilhe2/setup-kotlin#running-a-script-inline),
assuming kotlin is already installed (which is the default with ubuntu-latest).

Usage:
```yaml
    - uses: pgreze/kotlin-main-kts-run@main
      with:
        script: |
            println("Hello from kotlin")
```
