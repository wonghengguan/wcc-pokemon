# WCC Pokemon

This application was generated using JHipster 8.3.0, you can find documentation and help at [https://www.jhipster.tech/documentation-archive/v8.3.0](https://www.jhipster.tech/documentation-archive/v8.3.0).

## Assumptions
Device used to run this project will have below requirements:
1. A minimum Node.js version of v18.13.
2. Java17 set at JAVA_HOME
3. npm

## Development
Run the following commands in two separate terminals to start the project

```
./gradlew
npm start
```

## Testing

### Client tests

Unit tests are run by [Jest][]. They're located in [src/test/javascript/](src/test/javascript/) and can be run with:

```
npm test
```

### Spring Boot tests

To launch your application's tests, run:

```
./gradlew test integrationTest jacocoTestReport
```
