## Requested Uuid Logger For Nest
### overview
- Request based logger using uuid
- This logger use uuid to separte request
- Every request is separated by uuid made by this logger

### install
```bash
npm install requested-uuid-logger-for-nest
yarn add requested-uuid-logger-for-nest
```

### example
> provided by module
```typescript
@Module({
    imports: [ ],
    controllers: [ HelloController, ],
    providers: [ HelloService, LogService ],
})
export class UrlModule {}

```

> injection
```typescript
constructor(
    private readonly logger: LogService
) {}
```


> controller
```typescript
async helloController() {
    this.logger.error('hello controller');
}
```

> service
```typescript
async helloService() {
    this.logger.warn('hello service');
}
```

### result
![](https://user-images.githubusercontent.com/19590371/124780487-9b0a9480-df7d-11eb-86be-52b2fbd81375.PNG)
