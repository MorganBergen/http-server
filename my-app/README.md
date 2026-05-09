# my-app

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.13. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

##  killing program

```
lsof -i :3000
COMMAND     PID   USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
bun       64841 morgan    7u  IPv6 0x5e73f1eeb8c0fe79      0t0  TCP *:hbci (LISTEN)
Google    76420 morgan   21u  IPv6 0xb9d227941d09aec1      0t0  TCP localhost:54412->localhost:hbci (CLOSED)
Google    76420 morgan   44u  IPv6 0x9144eecafdc6fd80      0t0  TCP localhost:54413->localhost:hbci (CLOSED)

kill -9 <PID>
```

without using the PID directly you can call the following 

```
kill -9 $(lsof -t -i:3000)
```





