FROM golang:1.18-alpine AS builder
WORKDIR /build
COPY main.go /build/
RUN go build main.go

FROM scratch
WORKDIR /app
COPY --from=builder /build/main .
CMD ["./main"]
