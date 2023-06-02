# Lib

Integrate with third-party libs and frameworks, creating a facade for them.
This is useful to avoid coupling your code with a specific lib, making it easier to change it in the future.

## Example

```js
// src/lib/axios.js
import axios from "axios";

const api = axios.create({
	baseURL: "https://api.github.com",
});

export default api;
```
