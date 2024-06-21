interface Trace {
    read(): string;
    at(): number;
}

interface Traces extends Iterable<Trace> {
    add(trace: Trace): Traces;
}

interface Context {
}

interface Contexts extends Iterable<Context> {
    get(key: string): OptionalResult<Context>;
    add(key: string, context: Context): Contexts;
    remove(key: string): Contexts;
}

interface Either<T> {
    bind(fn: (value: T) => Result<T>): Result<T>;
    unwrap(): T;
    map(fn: (value: T) => T): Result<T>;
    lift(value: T): Result<T>;
    withTrace(trace: Trace): Result<T>;
    getTraces(): Traces;
    withContext(key: string, context: Context): Result<T>;
    getContext(key: string): OptionalResult<Context>;
    getContexts(): Contexts;
    clearContext(key: string): Result<T>;
}

declare class Success<T> implements Either<T> {
    private readonly value;
    private readonly traces;
    private readonly contexts;
    private constructor();
    static of(value: any, traces?: Traces | null, contexts?: Contexts | null): Success<any>;
    bind(fn: (value: T) => Result<T>): Result<T>;
    lift(value: any): Result<T>;
    map(fn: (value: any) => any): Result<T>;
    unwrap(): T;
    getTraces(): Traces;
    withTrace(trace: Trace): Result<T>;
    withContext(key: string, context: Context): Result<T>;
    getContext(key: string): OptionalResult<Context>;
    getContexts(): Contexts;
    clearContext(key: string): Result<T>;
}

declare class Failure implements Either<never>, Error {
    private readonly traces;
    private readonly contexts;
    message: string;
    code: string;
    name: string;
    previous: Error | null;
    private constructor();
    static dueTo(message: string, code: string, previous?: Error | null, trace?: Trace | null, traces?: Traces | null, contexts?: Contexts | null): Failure;
    bind(fn: (value: never) => Result<never>): Result<never>;
    map(fn: (value: never) => never): Result<never>;
    lift(value: never): Result<never>;
    unwrap(): never;
    getTraces(): Traces;
    withTrace(trace: Trace): Result<never>;
    withContext(key: string, context: Context): Result<never>;
    getContext(key: string): OptionalResult<Context>;
    getContexts(): Contexts;
    clearContext(key: string): Result<never>;
}

interface Optional<T> {
    bind<U>(fn: (value: T) => Optional<U>): Optional<U>;
    unwrap(): T;
    map<U>(fn: (value: T) => U): Optional<U>;
}

declare class None implements Optional<never> {
    static of(): None;
    bind(fn: (value: never) => Optional<never>): None;
    unwrap(): never;
    map<U>(fn: (value: never) => U): None;
}

declare class Some<T> implements Optional<T> {
    private readonly value;
    private constructor();
    static of<T>(value: T): Some<T>;
    bind<U>(fn: (value: T) => Optional<U>): Optional<U>;
    unwrap(): T;
    map<U>(fn: (value: T) => U): Optional<U>;
}

declare class Awaiting {
    constructor();
}

type OptionalResult<T> = None | Some<T>;
type Result<T> = Success<T> | Failure;
type AsyncResult<T> = Result<T> | Awaiting;

declare class ContextCollection implements Contexts {
    private contexts;
    static empty(): ContextCollection;
    get(key: string): OptionalResult<Context>;
    add(key: string, context: Context): ContextCollection;
    remove(key: string): ContextCollection;
    [Symbol.iterator](): Iterator<Context>;
}

declare class TraceCollection implements Traces {
    protected traces: Trace[];
    private constructor();
    static empty(): TraceCollection;
    add(trace: Trace): TraceCollection;
    [Symbol.iterator](): Iterator<Trace>;
}

export { type AsyncResult, Awaiting, type Context, ContextCollection, type Contexts, type Either, Failure, None, type Optional, type OptionalResult, type Result, Some, Success, type Trace, TraceCollection, type Traces };
