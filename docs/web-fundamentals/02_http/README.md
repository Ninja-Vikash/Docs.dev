## Docs.dev - HTTP

### What is HTTP?

HTTP stands for _HyperText Transfer Protocol_.<br/>
It's the protocol used by the web to transfer data between a client (browser) and a server.

Think of it's a language that browsers and servers use to talk to each other.

### How HTTP Works (Simple Flow) 🔄

```
You → open a website (client/browser)
↓
Browser sends an HTTP request to the server
↓
Server processes it and sends an HTTP response back
↓
Browser renders the page
```

### HTTP request structure

When we send a request (like opening `example.com`), here's what it contains:

```http
GET /home HTTP/1.1
Host: example.com
User-Agent: Chrome
Accept: text/html
```

-   **GET**: HTTP method

-   **/home**: resource you’re requesting

-   **Host**: website domain

-   **User-Agent**: browser info

-   **Accept**: what kind of content you want

### HTTP Response Structure 📦

When the server responds:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 452

<html>...page content...</html>
```

-   200 OK: status code (200 = success)

-   Content-Type: format of the content

-   Then comes the actual content (like HTML, JSON, etc.)

### Common HTTP Methods ✋

| Method   | Purpose               |
| :------- | :-------------------- |
| `GET`    | Fetch data (read)     |
| `POST`   | Send data (create)    |
| `PUT`    | Update data (replace) |
| `PATCH`  | Update data (partial) |
| `DELETE` | Delete data           |

### Common HTTP Status Codes 📊

| Code  | Meaning               |
| :---- | :-------------------- |
| `200` | OK                    |
| `201` | Created               |
| `400` | Bad Request           |
| `401` | Unauthorized          |
| `403` | Forbidden             |
| `404` | Not Found             |
| `500` | Internal Server Error |

### HTTP vs HTTPS 🔒

-   HTTP is unencrypted.

-   HTTPS adds a layer of encryption using SSL/TLS.

-   Always use HTTPS in production!

**Happy Coding 💖**
